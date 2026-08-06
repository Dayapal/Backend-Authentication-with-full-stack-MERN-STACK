import express from 'express';

import { createStudent, deleteStudents, getStudents, updateStudents } from '../controllers/students.controller.js';

const router = express.Router();

router.post("/students",createStudent)
router.get("/students", getStudents)
router.delete("/students/:id", deleteStudents)
router.put("/students/:id", updateStudents)

export default router;