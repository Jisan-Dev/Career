import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const receivedData = await request.json();
    console.log(receivedData);
    const newUser = new User({
      email: receivedData.email,
      password: receivedData.password,
      role: receivedData.role || "candidate",
      profile: {
        name: receivedData.firstName + " " + receivedData.lastName,
        image: receivedData.image || "",
        phone: receivedData.phone || "",
        company: receivedData.company || "",
        position: receivedData.position || "",
      },
    });
    await newUser.save();
    return Response.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json({ success: false, message: "Error registering user" }, { status: 500 });
  }
}
