import express from 'express';
import { createMobile, getMobiles } from '../controller/mobile.controller.js';

export const mobileRoute = express.Router();

mobileRoute.post("/mobile", createMobile)
mobileRoute.get("/mobiles", getMobiles)