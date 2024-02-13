import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../db/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req) {
  if (req.method === "GET") {
    const session = await getServerSession(authOptions);

    if (session) {
      const user = await db.user.findUnique({
        where: {
          email: session.user?.email || "",
        },
      });

      const jobs = await db.jobApplication.findMany({
        where: {
          applicantId: user.id,
        },
      });

      return NextResponse.json(jobs);
    } else {
      return new Response(null, {
        status: 401,
        statusText: "unauthorized",
      });
    }
  }
}
