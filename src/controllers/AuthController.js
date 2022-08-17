import { AES } from "crypto-js";
import bcrypt from "bcryptjs";
import moment from "moment";
import speakeasy from "speakeasy";
import Users from "../models/Users";
import UserRoleMaps from "../models/UserRoleMaps";
import SendEmail from "../config/SendEmail";
import { SignUpTemplate } from "../utils/templates/SignUpMail";
import { ForgotTemplate } from "../utils/templates/ForgotMail";
import SendMessage from "../utils/responses/SendMessage";
import SendData from "../utils/responses/SendData";
import CreateJWT from "../utils/CreateJWT";
import CreateMFA from "../utils/CreateMFA";
import {
  validateSignUp,
  validateResentOtp,
  validateOtpVerification,
  validateSignIn,
  validateMfaVerification,
  validateResetPassword,
} from "../models/Validation";

export const googleAuth = async (req, res, next) => {
  try {
    const { status, id, f_name, l_name, token } = await req.user;
    if (status === "success") {
      const encryptedToken = AES.encrypt(
        JSON.stringify({
          id,
          f_name,
          l_name,
          token,
        }),
        process.env.SESSION_SECRET
      );
      res.redirect(
        `${process.env.FRONT_END}/login?status=${status}&token=${encryptedToken}`
      );
    } else {
      res.redirect(`${process.env.FRONT_END}?status=${status}`);
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const signUp = async (req, res, next) => {
  try {
    await validateSignUp.validateAsync(req.body);

    const { f_name, l_name, email, phone, password } = req.body;

    let UserInfo = await Users.findOne({
      where: {
        email,
      },
    });
    if (UserInfo) {
      const error = new Error("Already use this email!");
      error.flag = true;
      error.statusCode = 409;
      return next(error);
    }

    const Otp = Math.floor(100000 + Math.random() * 900000);
    const OtpExpire = moment().add(10, "minutes");
    const hashPass = await bcrypt.hash(password, 12);
    const { mfa_secret, mfa_qr } = await CreateMFA();

    UserInfo = await Users.create({
      f_name,
      l_name,
      email,
      phone,
      password: hashPass,
      otp: Otp,
      otp_expire: OtpExpire,
      mfa_secret,
      mfa_qr,
    });
    if (!UserInfo) {
      const error = new Error("Something went wrong when creating an account!");
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    await UserRoleMaps.create({
      user_id: UserInfo.id,
      role_id: 2,
    });

    await SendEmail(
      email,
      `Email verification code: ${Otp}`,
      SignUpTemplate(Otp, `${f_name} ${l_name}`)
    );

    SendMessage(res, "Please check your email for OTP verification");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const resentOtp = async (req, res, next) => {
  try {
    await validateResentOtp.validateAsync(req.body);

    const { email } = req.body;

    let UserInfo = await Users.findOne({
      where: {
        email,
        is_verified: false,
        is_delete: false,
      },
    });
    if (!UserInfo) {
      const error = new Error("User not found!");
      error.flag = true;
      error.statusCode = 409;
      return next(error);
    }

    const Otp = Math.floor(100000 + Math.random() * 900000);
    const OtpExpire = moment().add(10, "minutes");
    const { f_name, l_name } = UserInfo;

    UserInfo = await Users.update(
      {
        otp: Otp,
        otp_expire: OtpExpire,
      },
      {
        where: {
          email,
        },
      }
    );
    if (!UserInfo) {
      const error = new Error("Something went wrong when sending an otp!");
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    await SendEmail(
      email,
      `Email verification code: ${Otp}`,
      SignUpTemplate(Otp, `${f_name} ${l_name}`)
    );

    SendMessage(res, "Please check your email for OTP verification");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const otpVerification = async (req, res, next) => {
  try {
    await validateOtpVerification.validateAsync(req.body);

    const { email, otp } = req.body;

    let UserInfo = await Users.findOne({
      include: [
        {
          as: "role_info",
          model: UserRoleMaps,
        },
      ],
      where: {
        email,
        is_verified: false,
        is_delete: false,
      },
    });

    if (!UserInfo) {
      const error = new Error("User not found!");
      error.flag = true;
      error.statusCode = 404;
      return next(error);
    }

    const { id, f_name, l_name, phone, otp_expire, role_info } = UserInfo;

    if (otp !== UserInfo.otp) {
      const error = new Error("Your otp has not to match!");
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    const isValid = moment().isBefore(otp_expire, "seconds");
    if (!isValid) {
      const error = new Error("Your otp has been expired!");
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    await Users.update(
      {
        is_verified: true,
      },
      {
        where: {
          email,
        },
      }
    );

    const { role_id } = role_info;
    SendData(res, {
      id,
      f_name,
      l_name,
      email,
      phone,
      role_id,
      token: CreateJWT(
        id,
        f_name,
        l_name,
        email,
        role_id,
        role_id === 1 ? "3h" : "7d"
      ),
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const signIn = async (req, res, next) => {
  try {
    await validateSignIn.validateAsync(req.body);

    const { email, password } = req.body;

    let UserInfo = await Users.findOne({
      include: [
        {
          as: "role_info",
          model: UserRoleMaps,
        },
      ],
      where: {
        email,
        is_delete: false,
      },
    });
    if (!UserInfo) {
      const error = new Error("Email or password is incorrect!");
      error.flag = true;
      error.statusCode = 404;
      return next(error);
    }

    const { id, f_name, l_name, phone, is_verified, mfa_enables, role_info } =
      UserInfo;

    const isEqual = await bcrypt.compare(password, UserInfo.password);
    if (!isEqual) {
      const error = new Error("Email or password is incorrect!");
      error.flag = true;
      error.statusCode = 401;
      return next(error);
    }

    if (!is_verified) {
      const Otp = Math.floor(100000 + Math.random() * 900000);
      const OtpExpire = moment().add(10, "minutes");

      UserInfo = await Users.update(
        {
          otp: Otp,
          otp_expire: OtpExpire,
        },
        {
          where: {
            email,
          },
        }
      );
      if (!UserInfo) {
        const error = new Error("Something went wrong when sending an otp!");
        error.flag = true;
        error.statusCode = 500;
        return next(error);
      }

      await SendEmail(
        email,
        `Email verification code: ${Otp}`,
        SignUpTemplate(Otp, `${f_name} ${l_name}`)
      );

      return SendData(res, {
        is_verified,
        email,
        message: "Please check your email for OTP verification",
      });
    }

    const { role_id } = role_info;
    if (mfa_enables) {
      SendData(res, {
        is_verified,
        id,
        role_id,
        mfa_enables,
      });
    } else {
      SendData(res, {
        is_verified,
        id,
        f_name,
        l_name,
        email,
        phone,
        role_id,
        mfa_enables,
        token: CreateJWT(
          id,
          f_name,
          l_name,
          email,
          role_id,
          role_id === 1 ? "3h" : "7d"
        ),
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const mfaVerification = async (req, res, next) => {
  try {
    await validateMfaVerification.validateAsync(req.body);

    const { id, token } = req.body;

    const UserInfo = await Users.findOne({
      include: [
        {
          as: "role_info",
          model: UserRoleMaps,
        },
      ],
      where: {
        id,
      },
    });
    if (!UserInfo) {
      const error = new Error("User not found!");
      error.flag = true;
      error.statusCode = 404;
      return next(error);
    }

    const { f_name, l_name, email, phone, mfa_secret, role_info } = UserInfo;

    const verified = speakeasy.totp.verify({
      secret: mfa_secret,
      encoding: "base32",
      token,
    });

    if (!verified) {
      const error = new Error("Invalid token!");
      error.flag = true;
      error.statusCode = 402;
      return next(error);
    }

    const { role_id } = role_info;
    SendData(res, {
      id,
      f_name,
      l_name,
      email,
      phone,
      role_id,
      token: CreateJWT(
        id,
        f_name,
        l_name,
        email,
        role_id,
        role_id === 1 ? "3h" : "7d"
      ),
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const { id } = req.user;

    const UserInfo = await Users.findOne({
      attributes: [
        "id",
        "f_name",
        "l_name",
        "email",
        "phone",
        "mfa_enables",
        "mfa_qr",
      ],
      where: {
        id,
        is_verified: true,
        is_delete: false,
      },
    });
    if (!UserInfo) {
      const error = new Error("User not found!");
      error.flag = true;
      error.statusCode = 404;
      return next(error);
    }

    SendData(res, UserInfo);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    await validateResentOtp.validateAsync(req.body);

    const { email } = req.body;

    let UserInfo = await Users.findOne({
      where: {
        email,
        is_delete: false,
      },
    });
    if (!UserInfo) {
      const error = new Error("User not found!");
      error.flag = true;
      error.statusCode = 409;
      return next(error);
    }

    const Otp = Math.floor(100000 + Math.random() * 900000);
    const reset_link = `${process.env.FRONT_END}/reset-password/otp=${Otp}&&email=${email}`;
    const { f_name, l_name } = UserInfo;

    UserInfo = await Users.update(
      {
        reset_link,
        otp_expire: moment().add(10, "minutes"),
      },
      {
        where: {
          email,
        },
      }
    );
    if (!UserInfo) {
      const error = new Error(
        "Something went wrong when sending a verification link!"
      );
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    await SendEmail(
      email,
      "Reset your password",
      ForgotTemplate(`${f_name} ${l_name}`, reset_link)
    );

    SendMessage(res, "Please check your email for verification");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    await validateResetPassword.validateAsync(req.body);

    const { reset_link, password } = req.body;

    let UserInfo = await Users.findOne({
      where: {
        reset_link,
        is_delete: false,
      },
    });
    if (!UserInfo) {
      const error = new Error("User not found!");
      error.flag = true;
      error.statusCode = 409;
      return next(error);
    }

    const { otp_expire } = UserInfo;
    const isValid = moment().isBefore(otp_expire, "seconds");
    if (!isValid) {
      const error = new Error("Your verification link has been expired!");
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    const hashPass = await bcrypt.hash(password, 12);
    UserInfo = await Users.update(
      {
        reset_link: "",
        password: hashPass,
      },
      {
        where: {
          reset_link,
        },
      }
    );
    if (!UserInfo) {
      const error = new Error(
        "Something went wrong when resetting the password!"
      );
      error.flag = true;
      error.statusCode = 500;
      return next(error);
    }

    SendMessage(res, "Password reset successfully");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
