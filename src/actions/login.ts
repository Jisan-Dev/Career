"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";
// import { redirect } from "next/navigation";

export const login = async (data: { email: string; password: string }) => {
  try {
    return await signIn("credentials", { redirect: false, email: data.email, password: data.password });
  } catch (error) {
    const someError = error as CredentialsSignin;
    return someError.cause;
  }
  // redirect("/");
};
