import express from "express";
import multer from "multer";
import {createMobile,getMobiles,} from "../controllers/mobile.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
export const mobileRoute = express.Router();
const upload = multer({ dest: "uploads/" });

mobileRoute.post("/mobile",  upload.single("image"),createMobile);

mobileRoute.get( "/mobiles", getMobiles);