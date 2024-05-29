import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { db } from "@/server/db";
import type { NextAuthConfig } from "next-auth";

const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;

        console.log(credentials);

        // logic to salt and hash password
        const pwHash = "saltAndHashPassword(credentials.password)";

        user = await db.user.findFirst();

        console.log(user);

        // logic to verify if user exists

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with the their profile data
        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
} satisfies NextAuthConfig;

export default authConfig;
