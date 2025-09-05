import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-supabase";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }: any) {
      return !!auth?.user;
    },
    //profile and account can be added but not that place
    async signIn({ user }: any) {
      try {
        //if guest exist(like login), we dont need to createGuest
        const existUser = await getGuest(user.email);
        if (!existUser)
          //very important to add await for craeteGuest,bcuse otherwise move on return true
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    //find guestId for mutation rezerv and another things
    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  //route to login page for custom page login
  pages: { signIn: "/login" },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
