import express from "express"
import database from '../config/database.js';
import personRoute from '../routes/person.route.js';
import studentRoute from "../routes/student.route.js";
import { router as coldrinkRoute } from "../routes/coldrink.route.js";
import { router as authRoute } from "../routes/auth.route.js";
import cors from 'cors'
import dotenv from "dotenv";
import { mobileRoute } from "../routes/mobile.route.js";
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
database();

app.use("/",personRoute);
app.use("/",studentRoute);
app.use("/", coldrinkRoute)
app.use("/", authRoute)
app.use("/", mobileRoute)
app.use((req,res) =>{
    res.send("Page Not Found")
})

app.listen(3000,()=>{
    console.log("Your server is running on port 3000")
})