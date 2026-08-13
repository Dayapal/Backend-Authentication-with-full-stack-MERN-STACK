import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required"
      })
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "This mail is already exists",
      })
    }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashPassword
    })

    await user.save();
    res.status(201).json({
      success: true,
      message: "User register successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    })


  } catch (error) {
    console.log("Failed to register User", error.message);
    res.status(400).json({
      success: false,
      message: "Failed to register User",
      error: error.message
    })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required"
      })
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not Found"
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password does not match"
      })
    }

    const token = generateToken(user._id)
    res.status(200).json({
      success: true,
      message: "User Log in successfully",
      token,
      data: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })


  } catch (error) {
    console.log("Failed to login User ", error.message);
    res.status(400).json({
      success: false,
      message: "Failed to Login User",
      error: error.message
    })
  }
}
