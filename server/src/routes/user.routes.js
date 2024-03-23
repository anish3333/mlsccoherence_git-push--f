import { Router } from "express";
import {uploadOnServer} from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addToChannels, addToHistory, fetchChannels, fetchHistory, getUserData, loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(
  uploadOnServer.single("avatar"),
  registerUser
)
router.route("/login").post(loginUser)


//Secured routes
router.route("/logout").get(verifyJWT,logoutUser);
router.route("/getuser").get(verifyJWT, getUserData);
router.route("/history").post(verifyJWT, addToHistory).get(verifyJWT, fetchHistory);
router.route("/channel").post(verifyJWT, addToChannels).get(verifyJWT, fetchChannels);

export default router;