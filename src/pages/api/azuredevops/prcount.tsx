import type { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";
import * as Sentry from "@sentry/browser";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  Sentry.captureMessage("Pr count handler started");
  if (req.method == "GET") {
    let count = 2;
    return res.status(200).json({ count });
  } else {
    throw new Error("Only GET method is allowed");
  }
}

export default withSentry(handler);
