import { Router } from "express";
import { registerUser,loginUser,logoutUser,refreshAccessToken } from "../controllers/User.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(verifyJWT, refreshAccessToken);



export default router
