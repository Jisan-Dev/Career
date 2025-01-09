import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "./lib/dbConnect";
import { compare } from "bcryptjs";
import { User } from "./models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          // add logics to process credentials
          const email = credentials?.email as string | undefined;
          const password = credentials?.password as string | undefined;

          if (!email || !password) {
            throw new Error("Email and password are required");
          }

          dbConnect();
          const user = await User?.findOne({ email });

          if (!user) {
            throw new Error("User not found");
          }

          const isPassCorrect = await compare(password, user?.password);

          if (!isPassCorrect) {
            throw new Error("Invalid Credentials");
          }

          return user;
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: { signIn: "/signin" },
  secret: process.env.AUTH_SECRET,
  // callbacks: {
  //   signIn: async ({ user, account }) => {
  //     if (account?.provider === "credentials") {
  //       return true;
  //     }
  //     return false;
  //   },
  // },
});
