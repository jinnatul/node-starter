import { Router } from "express";
import { SignUp } from "../controllers/AuthController";
import AuthorizedUser from "../middlewares/AuthorizedUser";

const router = Router();

router.post("/signup", SignUp);

export default router;
