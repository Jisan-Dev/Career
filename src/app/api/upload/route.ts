import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { file } = await req.json();
      const uploadResponse = await cloudinary.uploader.upload(file, { upload_preset: "ssvmfwvn" });

      return Response.json({ url: uploadResponse.secure_url });
    } catch (error) {
      return Response.json({ message: "Image upload failed", error }, { status: 500 });
    }
  } else {
    // Response.setHeader("Allow", ["POST"]);
    return Response.json(`Method ${req.method} Not Allowed`);
  }
}
