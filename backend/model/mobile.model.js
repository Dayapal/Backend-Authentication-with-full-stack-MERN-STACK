import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,"name is required"],

    },
    price:{
        type: Number,
        required: [true,"price is requied"],
    },
    color: {
        type: String,
        required: [true,"color is required"],
    },
    companyName: {
        type: String,
        required: [true,'company required'],
    },
    ram:{
        type: String,
        required: [true, 'ram is required']
    },
    camera: {
        type: String,
        required: [true,'camera is required'],
    },


},{timestamps: true});

const Mobile = mongoose.model("Mobile", mobileSchema);
export default Mobile;