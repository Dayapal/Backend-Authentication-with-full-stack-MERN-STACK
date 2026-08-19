import express from 'express';
import { createMobile, getMobiles } from '../controllers/mobile.controller.js';
import authMiddleware from '../middleware/authMiddleware.js'


export const mobileRoute = express.Router();
mobileRoute.post("/mobile",  authMiddleware,  createMobile)
mobileRoute.get("/mobiles", getMobiles)