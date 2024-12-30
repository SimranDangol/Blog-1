import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/temp"); //folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
