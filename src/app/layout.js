import { Inter } from "next/font/google";
import { SessionProvider } from "./SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LUMEN",
  description:
    "LUMEN is a multi-disciplinary collective of artists, developers, writers, and creatives creating a space for brands and products to flourish.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
