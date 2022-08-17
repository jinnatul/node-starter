import { Router } from "express";
import { GoogleRequest } from "../middlewares/Google";
import {
  googleAuth,
  signUp,
  resentOtp,
  otpVerification,
  signIn,
  mfaVerification,
  getProfile,
  forgotPassword,
  resetPassword,
} from "../controllers/AuthController";
import AuthorizedUser from "../middlewares/AuthorizedUser";

const router = Router();

router.get("/google", GoogleRequest);
router.get("/google/callback", GoogleRequest, googleAuth);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/resent-otp", resentOtp);
router.post("/verify-otp", otpVerification);
router.post("/verify-mfa", mfaVerification);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.use(AuthorizedUser);
router.get("/profile", getProfile);

export default router;
