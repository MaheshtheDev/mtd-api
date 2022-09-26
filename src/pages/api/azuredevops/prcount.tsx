import type { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest) {
  if (req.method == "GET") {
    return new Response(JSON.stringify(2), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    });
  }
}
