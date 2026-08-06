
import mongoose from "mongoose";

const coldrinksSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    flavour:{
        type:String,
        required:true,
    }
    ,
    quantity:{
        type:Number,
        required:true,
    }
})


const Coldrink = mongoose.model("Coldrink", coldrinksSchema);
export default Coldrink;