import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const receivedData = await request.json();
    if (receivedData.firstName && receivedData.lastName) {
      receivedData.username = receivedData.firstName + " " + receivedData.lastName;
      delete receivedData.firstName;
      delete receivedData.lastName;
    }

    // check if user already exists
    const user = await User.findOne({ email: receivedData.email });
    if (user) {
      return Response.json({ success: false, message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await hash(receivedData.password, 10);
    receivedData.password = hashedPassword;
    const newUser = new User(receivedData);
    await newUser.save();
    return Response.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json({ success: false, message: "Error registering user" }, { status: 500 });
  }
}
