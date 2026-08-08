import Person, { Student } from "../model/person.model.js"


export const createPerson = async(req,res) =>{
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).json({
            success:true,
            message:"Person Create successfully",
            data:person
        })
    } catch (error) {
        console.log("failed to create person",error.message);
        res.status(400).json({
            success:false,
            message:"Failed to create",
            error: error.message
        })        
    }
}



