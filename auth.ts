import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github, google],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      const isOnDashboard = pathname.startsWith("/dashboard");
      // console.log("auth", auth);
      if (pathname === "/" || isOnDashboard) return !!auth;
      if (auth && pathname === "/login") {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
});
