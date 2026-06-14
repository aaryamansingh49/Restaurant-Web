import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    address: { type: String, default:'' }, // Optional field
    phoneNumber: { type: String, default:'' }, // Optional field
    agreedToTerms: { type: Boolean, required: true },
});

// Model
const userModel = mongoose.model('user', userSchema);

export default userModel;
