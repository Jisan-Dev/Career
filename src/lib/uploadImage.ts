export const uploadImage = async (fileImage: File) => {
  const toBase64 = (fileImage: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileImage);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const base64Image = await toBase64(fileImage!);

  const resImage = await fetch("/api/upload", {
    method: "POST",
    body: JSON.stringify({ file: base64Image }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resImage.ok && resImage.status === 500) {
    throw new Error("Error uploading image");
  }
  const jsonImage = await resImage.json();
  return jsonImage;
};
