import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const Person = mongoose.model("Person", personSchema);
export const Student = mongoose.model("Aditiya", studentSchema);


export default Person