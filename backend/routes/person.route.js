import express from 'express';
import { createPerson } from '../controllers/person.controller.js';

const router = express.Router();

router.post("/persons",createPerson)


export default router;