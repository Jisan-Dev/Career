import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import dbConnect from "./lib/dbConnect";
import { compare } from "bcryptjs";
import { User } from "./models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<any> => {
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

          return user; // this will be stored in the token
          // return {
          //   ...user.toObject(),
          //   _id: user._id.toString(),
          // };  // this will also work then we won't need to specify return Promise<Any>
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
  callbacks: {
    async session({ session, token }: any) {
      if (token) {
        session.user._id = token._id;
        session.user.role = token.role;
        session.user.sub = token.sub;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.role = user.role;
        token.sub = user.sub;
      }
      return token;
    },
    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, image, name, id } = user;

          await dbConnect();
          const alreadyUser = await User.findOne({ email });

          if (alreadyUser) {
            return true;
          } else {
            await User.create({
              email,
              providerId: id,
              role: "notDefined",
              username: name,
              image,
            });
            return true;
          }
        } catch (error) {
          console.log(error);
          throw new Error("Error while creating user after google signin");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
