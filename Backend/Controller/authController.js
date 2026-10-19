import User from "../Modles/User.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // if user already exists
    const isUserExists = await User.findOne({ email });
    if (isUserExists) {
      return res.status(400).json({ message: "User already Exists" });
    }
    // Hash Password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create user
    await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.json({ message: "User Register Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
