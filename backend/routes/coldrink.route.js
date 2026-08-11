import express from 'express';
import { createColdrink, deleteColdrink, getColdrink, updateColdrink } from '../controllers/coldrink.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';
export const router = express.Router();

router.post("/coldrink", authMiddleware, createColdrink)
router.get("/coldrinks", authMiddleware, getColdrink)
router.put("/coldrink/:id", authMiddleware, updateColdrink)
router.delete("/coldrink/:id", authMiddleware, deleteColdrink)



