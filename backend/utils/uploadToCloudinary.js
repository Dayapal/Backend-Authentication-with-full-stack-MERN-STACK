import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (buffer, folder = "mobiles") => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.error("========== CLOUDINARY ERROR ==========");
          console.error(error);
          console.error("message:", error?.message);
          console.error("http_code:", error?.http_code);
          console.error("name:", error?.name);
          console.error("======================================");

          reject(error);
          return;
        }

        console.log("Cloudinary upload successful");
        console.log("URL:", result.secure_url);

        resolve(result);
      }
    );

    uploadStream.end(buffer);
  });
};

export default uploadToCloudinary;