import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      const isOnDashboard = pathname.startsWith("/dashboard");
      if (pathname === "/" || isOnDashboard) return !!auth;
      return true;
    },
  },
});
