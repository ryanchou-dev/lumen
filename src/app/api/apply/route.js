import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../db/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method === "POST") {
    console.log("RECEIVED!");
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
      userEmail,
    } = await req.json();
    console.log(
      firstName,
      lastName,
      phoneNumber,
      resumeLink,
      address,
      linkedin,
      github,
      twitter,
      portfolio,
      userEmail,
      jobTitle
    );
    const session = await getServerSession(authOptions);
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !resumeLink ||
      !userEmail ||
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
        console.log({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          resumeLink: resumeLink,
          userEmail: userEmail,
          jobTitle: jobTitle,
        });
        const post = await db.jobApplication.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
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

        console.log("POSTED!");
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
