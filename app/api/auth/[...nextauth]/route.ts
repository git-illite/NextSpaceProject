import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"


export const authOptions: NextAuthOptions = {
    providers:[
    GoogleProvider({
        clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID: '',
        clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET: '',
      }),
    ]
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}