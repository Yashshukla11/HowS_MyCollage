import { Router } from "express";
import registerUser from "../controllers/user.controllers.js";

const router = Router()

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/logout");


export default router;