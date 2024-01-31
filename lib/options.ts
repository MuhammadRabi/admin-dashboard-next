import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        // where you need to retreive your user data
        // dummy data
        // to add credentials later
        const user = { id: "27", name: "muhammadrabi", password: "1244545" }
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}
