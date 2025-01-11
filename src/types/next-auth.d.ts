import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    role?: string;
    sub?: string;
  }

  // interface Session {
  //   user: {
  //     _id?: string;
  //     role?: string;
  //     sub?: string;
  //   } & DefaultSession["user"];
  // }
}

// declare module "next-auth/jwt" {
//   interface JWT {
//     _id?: string;
//     role?: string;
//     sub?: string;
//   }
// }

// export const { auth, handlers } = NextAuth({
//   callbacks: {
//     session({ session, token, user }) {
//       // `session.user._id` is now a valid property, and will be type-checked
//       // in places like `useSession().data.user` or `auth().user`
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           _id: user._id,
//           role: user.role,
//           sub: user.sub,
//         },
//       };
//     },
//   },
// });
