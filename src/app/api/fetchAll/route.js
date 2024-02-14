import { getServerSession } from "next-auth";
import { authOptions } from "../../db/authOptions";
// import database instance
import { db } from "../../db/db";
import { NextResponse } from "next/server";

// pull every single job application
export async function GET(req) {
  if (req.method === "GET") {
    const session = await getServerSession(authOptions);

    // verify that user is an admin
    if (session && session.user?.admin) {
      const jobs = await db.jobApplication.findMany();

      return NextResponse.json(jobs);
    } else {
      return new Response(null, {
        status: 401,
        statusText: "unauthorized",
      });
    }
  }
}
