// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });

//     fs.unlinkSync(localFilePath); // Clean up the local file
//     return response;
//   } catch (error) {
//     fs.unlinkSync(localFilePath);
//     console.error("Cloudinary upload error:", error);
//     throw new Error("Failed to upload image");
//   }
// };


import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (fileBuffer) => {
  try {
    if (!fileBuffer) return null;

    // Convert buffer to base64
    const b64 = Buffer.from(fileBuffer).toString("base64");
    const dataURI = "data:image/jpeg;base64," + b64;
    
    const response = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });

    return response;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image");
  }
};