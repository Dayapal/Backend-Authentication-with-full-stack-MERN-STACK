import "dotenv/config";
import cloudinary from "./config/cloudinary.js";

console.log("Cloud:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API key:", process.env.CLOUDINARY_API_KEY);
console.log("Secret loaded:", !!process.env.CLOUDINARY_API_SECRET);

try {
  const result = await cloudinary.api.ping();

  console.log("PING SUCCESS");
  console.log(result);
} catch (error) {
  console.log("PING FAILED");
  console.log(error);
}