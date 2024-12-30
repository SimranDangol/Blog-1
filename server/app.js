import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import admin from "firebase-admin";
import path from "path";

// Routes
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const __dirname = path.resolve();
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = { origin: process.env.URL, credentials: true };
app.use(cors(corsOptions));

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// API Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/comment", commentRouter);

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, "/client/dist")));

// Catch-all route to serve the frontend index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

export default app;
