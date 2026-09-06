import { createHmac, timingSafeEqual } from "crypto";

export const PROPOSAL_COOKIE = "blymo_private_collection_access";
export const PROPOSAL_PATH = "/proposals/private-collection";

export function secureEqual(left: string, right: string) {
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
