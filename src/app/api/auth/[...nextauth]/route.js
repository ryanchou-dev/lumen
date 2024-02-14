import NextAuth from "next-auth";
import { authOptions } from "../../../db/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
