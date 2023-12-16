import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import axios from "axios";
async function refreshToken(token: JWT): Promise<JWT> {
  try {
    const res = await axios.post("http://localhost:3001/auth/refresh", {});

    const response = await res.data;

    return {
      ...token,
      backendTokens: response,
    };
  } catch (error) {
    return token;
  }
}
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    // Other providers if needed
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        try {
          const res = await axios.post("http://localhost:3001/auth/login", {
            username,
            password,
          });
          const user = await res.data;
          return user;
        } catch (error) {
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
  pages: {
    signIn: "/login", // Đường dẫn tới trang đăng nhập tùy chỉnh của bạn
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
