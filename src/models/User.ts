import mongoose, { Schema, Document } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  role: "candidate" | "recruiter" | "admin";
  profile: {
    name: string;
    image: string;
    phone?: string;
    company?: string; // for recruiters
    position?: string; // for recruiters
  };
}

// define mongoose schema for the User base on above interface
const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: [true, "email is required"], unique: true },
});
