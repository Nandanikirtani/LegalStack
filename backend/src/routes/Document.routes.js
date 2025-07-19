import { Router } from "express";
import {createDocument} from "../controllers/Document.controller.js";
import { upload } from "../middlewares/Multer.middleware.js";
// import { verifyJWT } from "../middlewares/VerifyJWT.middleware.js"; 

const router = Router()

router.route("/create").post(
    upload.fields([
        { name: "document", maxCount: 1 },
    ]),
    createDocument
);

export default router;