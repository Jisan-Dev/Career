import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  providerId: string;
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
  email: { type: String, required: [true, "email is required"], trim: true, lowercase: true, unique: true },
  password: {
    type: String,
    required() {
      return !this.providerId;
    },
  },
  providerId: {
    type: String,
    required() {
      return !this.password;
    },
  },
  role: { type: String, enum: ["candidate", "recruiter", "admin"], default: "candidate" },
  profile: {
    name: { type: String, required: true },
    image: { type: String },
    phone: { type: String },
    company: {
      type: String,
      required: function () {
        return this.role === "recruiter";
      },
    },
    position: {
      type: String,
      required: function () {
        return this.role === "recruiter";
      },
    },
  },
});

export const User = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", UserSchema);