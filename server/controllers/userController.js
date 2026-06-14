import UserModel from "../models/userSchema.js";
import bcrypt from "bcrypt";

class UserController {
    

  static createUserDoc = async (req, res) => {
    const { fullName, email, password, confirmPassword, address, phoneNumber, agreedToTerms } = req.body;
    console.log("rebody....",req.body);

    // Validate the input fields
    if (!fullName || !email || !password || !confirmPassword || agreedToTerms === undefined) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new UserModel({
            fullName,
            email,
            password: hashedPassword,  // Store the hashed password
            address,  // Optional field
            phoneNumber,  // Optional field
            agreedToTerms
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }  catch (error) {
      console.log(error);
    }
  };

  



  static verifyLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log("login.....",req.body);

    // Validate input fields
    if (!email || !password) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    try {
        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Compare the password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }
        res.status(200).json(user);
    }catch (error) {
      console.log(error);
    }
  };
}



export default UserController;
