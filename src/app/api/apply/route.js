import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
// import database instance
import { db } from "../../db/db";
import { NextResponse } from "next/server";

// CREATE a new job application
export async function POST(req) {
  if (req.method === "POST") {
    const {
      jobTitle,
      firstName,
      lastName,
      phoneNumber,
      resumeLink,
      address,
      linkedin,
      github,
      twitter,
      portfolio,
      contactEmail,
    } = await req.json();

    // authentication protecting api route
    const session = await getServerSession(authOptions);

    // not enough information
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !resumeLink ||
      !contactEmail ||
      !jobTitle
    ) {
      return new Response(null, {
        status: 400,
        statusText: "bad-request",
      });
    }

    if (session) {
      const user = await db.user.findUnique({
        where: {
          email: session.user?.email || "",
        },
      });

      const exists = await db.jobApplication.findFirst({
        where: {
          applicantId: user.id,
          jobTitle: jobTitle,
        },
      });

      // if application exists for this job under this user
      if (exists) {
        return new Response(null, {
          status: 409,
          statusText: "Already applied",
        });
      }

      if (!user) {
        return new Response(null, {
          status: 404,
          statusText: "User not found",
        });
      } else {
        const post = await db.jobApplication.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            contactEmail: contactEmail,
            resumeLink: resumeLink,
            jobTitle: jobTitle,
            linkedin: linkedin,
            github: github,
            twitter: twitter,
            portfolio: portfolio,
            address: address,
            applicantId: user.id,
          },
        });

        if (!post) {
          return new Response(null, {
            status: 500,
            statusText: "internal-server-error",
          });
        }

        return NextResponse.json(post);
      }
    } else {
      return new Response(null, {
        status: 401,
        statusText: "unauthorized",
      });
    }
  }
}
