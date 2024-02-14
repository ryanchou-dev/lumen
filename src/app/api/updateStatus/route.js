import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
// import database instance
import { db } from "../../db/db";
import { NextResponse } from "next/server";

// UPDATE query for job application status
export async function POST(req) {
  if (req.method === "POST") {
    const { id, status } = await req.json();
    // get the user's authentication status
    const session = await getServerSession(authOptions);

    // if the user is an admin
    if (session && session.user.admin) {
      const job = await db.jobApplication.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });

      if (!job) {
        return new Response(null, {
          status: 500,
          statusText: "internal-server-error",
        });
      }

      // return updated
      return NextResponse.json(job);
    }
  } else {
    // user is not signed in/not admin
    return new Response(null, {
      status: 401,
      statusText: "unauthorized",
    });
  }
}
