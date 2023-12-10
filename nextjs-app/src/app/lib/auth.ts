import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createAxios } from "../_services/createInstance";
import { JWT } from "next-auth/jwt";

async function refreshToken(token: JWT): Promise<JWT> {
  const axiosClient = createAxios();
  try {
    const res = await axiosClient.post(
      "/auth/refresh",
      {},
      {
        withCredentials: true,
      }
    );

    const response = await res.data;

    return {
      ...token,
      backendTokens: response,
    };
  } catch (error) {
    console.log(error);
    return token;
  }
}

export const authConfig: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    // Other providers if needed
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const axiosClient = createAxios();
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        try {
          const res = await axiosClient.post(
            "/auth/login",
            {
              username,
              password,
            },
            {
              withCredentials: true,
            }
          );
          const user = await res.data();
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },
};
