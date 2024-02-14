import { getServerSession } from "next-auth";
import { authOptions } from "../../db/authOptions";
// import databse instance
import { db } from "../../db/db";
import { NextResponse } from "next/server";

// find all job applications for the user
export async function GET(req) {
  if (req.method === "GET") {
    // get the user's authentication status
    const session = await getServerSession(authOptions);

    if (session) {
      // find the user
      const user = await db.user.findUnique({
        where: {
          email: session.user?.email || "",
        },
      });

      // get all jobs where this user is the applicant
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
