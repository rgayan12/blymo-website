"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  PROPOSAL_COOKIE,
  PROPOSAL_PATH,
  proposalSessionToken,
  secureEqual,
} from "./auth";

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
