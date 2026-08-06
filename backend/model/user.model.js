// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       minlength: 3,
//       maxlength: 50,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: 6,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.model("User", userSchema);

// export default User;



import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true,'name is required'],
    trim: true,
    minLength: 3,
    maxLength: 50
  },
  email:{
    type:String,
    required: [true,"email is required"],
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true,'password is required'],
    minLength: 6,
  }

},{timestamps: true})


const User = mongoose.model("User", userSchema);
export default User;














