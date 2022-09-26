import type { NextApiRequest } from "next";
import { withSentry } from "@sentry/nextjs";

async function handler(req: NextApiRequest) {
  if (req.method == "GET") {
    return new Response(JSON.stringify(2), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    });
  }
  else {
    throw new Error("Only GET method is allowed");
  }
}

export default withSentry(handler);