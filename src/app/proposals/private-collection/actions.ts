"use server";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const PROPOSAL_COOKIE = "blymo_private_collection_access";
const PROPOSAL_PATH = "/proposals/private-collection";

function secureEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return (
    leftBuffer.length === rightBuffer.length &&
    timingSafeEqual(leftBuffer, rightBuffer)
  );
}

export function proposalSessionToken() {
  const password = process.env.PRIVATE_COLLECTION_PROPOSAL_PASSWORD;
  const secret = process.env.PROPOSAL_SESSION_SECRET;

  if (!password || !secret) return null;

  return createHmac("sha256", secret)
    .update(`private-collection:${password}`)
    .digest("hex");
}

export async function unlockProposal(formData: FormData) {
  const submittedPassword = String(formData.get("password") ?? "");
  const configuredPassword = process.env.PRIVATE_COLLECTION_PROPOSAL_PASSWORD;
  const token = proposalSessionToken();

  if (
    !configuredPassword ||
    !token ||
    !secureEqual(submittedPassword, configuredPassword)
  ) {
    redirect(`${PROPOSAL_PATH}?error=invalid`);
  }

  cookies().set(PROPOSAL_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: PROPOSAL_PATH,
  });

  redirect(PROPOSAL_PATH);
}

export async function lockProposal() {
  cookies().set(PROPOSAL_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: PROPOSAL_PATH,
  });

  redirect(PROPOSAL_PATH);
}
