import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import Users from "../models/Users";
import UserRoleMaps from "../models/UserRoleMaps";
import CreateJWT from "../utils/CreateJWT";
import CreateMFA from "../utils/CreateMFA";

const generateToken = async (profile) => {
  const { given_name, family_name, email } = profile._json;
  let UserInfo = await Users.findOne({
    where: { email: email },
  });
  if (!UserInfo) {
    const { mfa_secret, mfa_qr } = await CreateMFA();
    UserInfo = await Users.create({
      f_name: given_name,
      l_name: family_name,
      email,
      is_google: true,
      is_verified: true,
      mfa_secret,
      mfa_qr,
    });

    await UserRoleMaps.create({
      user_id: UserInfo.id,
      role_id: 2,
    });
  }

  return UserInfo
    ? {
        status: "success",
        id: UserInfo.id,
        f_name: given_name, 
        l_name: family_name,
        token: CreateJWT(UserInfo.id, given_name, family_name, email, 2, "7d"),
      }
    : {
        status: "fail",
      };
};

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      accessType: "offline",
    },
    (accessToken, refreshToken, profile, cb) => {
      cb(null, generateToken(profile));
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

export default passport;
