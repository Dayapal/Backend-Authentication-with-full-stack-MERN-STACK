import { Student } from "../model/person.model.js";

export const createStudent = async(req,res) =>{
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({
            success:true,
            message:"student Create successfully",
            data:student
        })
    } catch (error) {
        console.log("failed to create student",error.message);
        res.status(400).json({
            success:false,
            message:"Failed to create student",
            error: error.message
        })

        
    }
}


export const getStudents = async(req,res) =>{
    try {
        const students = await Student.find();

        console.log("Students get successfully");
        res.status(200).json({
            success:true,
            message: "Students get successfully",
            data: students,
            count: students.length,
        })
        
    } catch (error) {
        console.log("Failed to get Student", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to get students",
            error: error.message,
        })
        
    }
}



export const deleteStudents = async(req,res) =>{
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(400).json({
                success: false,
                message: "Student not Found",
            })
        }
        res.status(200).json({
            success:false,
            message: `${student.name} delete successfully`,
            data: student,
        })
    } catch (error) {
        console.log("Faile to delete students", error.message);
        res.status(400).json({
            success: false,
            message: "failed to delete student",
            error: error.message
        })
        
    }
}


export const updateStudents = async(req,res) =>{
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if(!student){
            return res.status(400).json({
                success:false,
                message: "Student Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: `${student.name} Update sucessfully`,
            data: student
        })
        
    } catch (error) {
        console.log("Failed to update students");
        console.error(error.message);
        res.status(400).json({
            success: false,
            message: "Failed to update students"
        })
        
    }
}