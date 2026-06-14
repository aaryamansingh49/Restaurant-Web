import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

// Routes
router.post("/signup", UserController.createUserDoc); // Signup route
router.post("/login", UserController.verifyLogin);    // Login route

export default router;
