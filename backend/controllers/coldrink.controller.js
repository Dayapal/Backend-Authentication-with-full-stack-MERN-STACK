import Coldrink from "../model/coldrink.model.js"

export const createColdrink = async(req,res) =>{
    try {
        const coldrink = new Coldrink(req.body);
        coldrink.save();
        console.log("Coldrink created successfully");
        res.status(201).json({
            success:true,
            message:"Coldrink created successfully",
            data: coldrink,
            count: coldrink.length
        })
        

    } catch (error) {
        console.log("Failed to create coldrink",error.message);
        res.status(400).json({
            success:false,
            message: "Failed to create coldrinks",
            error: error.message,
        })

        
    }
}


export const getColdrink = async(req,res) =>{
    try {
        const coldrinks = await Coldrink.find();
        if(!coldrinks){
            return res.status(404).json({
                success:false,
                message: "coldrinkg not found"
            })
        }
        console.log("Get coldrink successfully")
        res.status(200).json({
            success:true,
            message: "Get coldrinkg successfully",
            data: coldrinks,
            count: coldrinks.length,
        })
        
    } catch (error) {
        console.log("failed to get coldrink", error.message);
        res.status(400).json({
            success:false,
            message: "Failed to get coldrink",
            error:error.message
        })
    }
}


export const updateColdrink = async(req,res) =>{
    try {
        const coldrink = await Coldrink.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators: true,
            }
        )
        if(!coldrink){
            return res.status(404).json({
                success: false,
                message: "coldrink not found",
            })
        } 
        console.log("Coldrinkg updates successfully");
        res.status(200).json({
            success:true,
            message: "coldrink updates successfully",
            data: coldrink,
        })
    } catch (error) {
        console.log("Failed to update coldrink", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to update coldrink",
            error:error.message
        })
        
    }
}

export const deleteColdrink = async(req,res) =>{
    try {
        const coldrink = await Coldrink.findByIdAndDelete(req.params.id);
        if(!coldrink){
            return res.status(404).json({
                success: false,
                message: "not found coldrink"
            })
        }
        res.status(200).json({
            success: true,
            message: "coldrink deleted successfully",
            data : coldrink
        })
        
    } catch (error) {
        console.log("failed to delete coldrink", error.message);
        res.status(400).json({
            success: false,
            message : "failed to delete coldrinks",
            error: error.message
        })
    }
}