import express from "express";
import multer from "multer";
import {createMobile,getMobiles,} from "../controllers/mobile.controller.js";
import upload from "../middleware/upload.js";
export const mobileRoute = express.Router();
mobileRoute.post("/mobile",  upload.single("image"),createMobile);
mobileRoute.get( "/mobiles", getMobiles);