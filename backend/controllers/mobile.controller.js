import Mobile from "../model/mobile.model.js";
import User from "../model/user.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const createMobile = async (req, res) => {
  try {
    const {name,price,color,companyName,ram, camera, } = req.body;
    if (!name ||!price ||!color || !companyName ||!ram ||!camera
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }
    let image = "";
    let imagePublicId = "";
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer,"mobiles");
      image = result.secure_url;
      imagePublicId = result.public_id;
    }
    const mobile = await Mobile.create({
      name,
      price,
      color,
      companyName,
      ram,
      camera,
      image,
      imagePublicId,
    });

    return res.status(201).json({
      success: true,
      message: "Mobile created successfully",
      data: mobile,
    });
  } catch (error) {
    console.error("Create mobile error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        if (!mobiles) {
            return res.status(404).json({
                success: false,
                message: "Mobile not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Mobile get successfully",
            data: mobiles,
            count: mobiles.length
        })

    } catch (error) {
        console.log("Failed to get Mobiles ", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to get mobiles",
            error: error.message
        })


    }
}

export const updateMobile = async (req, res) => {
    try {
        const mobile = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {

                new: true,
                runValidators: true,
            }
        );

        if (!mobile) {
            return res.status(404).json({
                success: false,
                message: "Failed to  update Mobile"
            })
        };

        res.status(200).json({
            success: true,
            message: "Mobile updated successfully",
            data: mobile,
        })

    } catch (error) {
        console.log("Failed to update mobile ", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to update mobile",
            error: error.message
        })

    }
}



export const deleteMobile = async (req, res) => {
    try {
        const mobile = await User.findByIdAndDelete(req.params.id);
        if (!mobile) {
            return res.status(404).json({
                success: false,
                message: "Mobile not found"
            })
        };

        res.status(200).json({
            success: true,
            message: "Mobile deleted  successfully",
            data: mobile,
        })

    } catch (error) {
        console.log("Failed to deleted mobile ", error.message);
        res.status(400).json({
            success: false,
            message: "Failed to deleted  mobile",
            error: error.message
        })

    }
}