import Email from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    Email({
      server: {
        host: process.env.NEXT_PUBLIC_SMTP_HOST,
        port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
        auth: {
          user: process.env.NEXT_PUBLIC_SMTP_USER,
          pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
        },
      },
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    }),
  ],

  callbacks: {
    // attach user id and admin status to session
    session: async ({ session, user }) => {
      session.user.id = user.id;
      session.user.admin = user.admin;
      return session;
    },
  },
};
