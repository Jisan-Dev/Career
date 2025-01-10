"use server";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { hash } from "bcryptjs";

interface RegistrationSchema {
  email: string;
  password: string;
  providerId?: string;
  role: "candidate" | "recruiter" | "admin";
  username?: string;
  image?: string;
  phone?: string;
  companyName?: string; // for recruiters
  position?: string; // for recruiters
  firstName?: string;
  lastName?: string;
}

export const register = async (data: RegistrationSchema) => {
  await dbConnect();
  try {
    const receivedData = data!;
    if (receivedData.firstName && receivedData.lastName) {
      receivedData.username = receivedData.firstName + " " + receivedData.lastName;
      delete receivedData.firstName;
      delete receivedData.lastName;
    }

    // check if user already exists
    const user = await User.findOne({ email: receivedData.email });
    if (user) {
      return { success: false, message: "User already exists" };
    }
    const hashedPassword = await hash(receivedData.password, 10);
    receivedData.password = hashedPassword;
    const newUser = new User(receivedData);
    await newUser.save();
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Error registering user", error);
    return { success: false, message: "Error registering user" };
  }
};
