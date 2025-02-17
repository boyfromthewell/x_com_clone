import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { CredentialsSignin } from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  trustHost: true,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );
        if (!authResponse.ok) {
          const credentialsSignIn = new CredentialsSignin();
          if (authResponse.status === 404) {
            credentialsSignIn.code = "no_user";
          } else if (authResponse.status === 401) {
            credentialsSignIn.code = "wrong_password";
          }
          throw credentialsSignIn;
        }
        const user = await authResponse.json();

        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
