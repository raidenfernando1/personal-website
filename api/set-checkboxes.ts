import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { value } = req.body;

  if (typeof value !== "string") {
    res.status(400).json({ error: "Invalid value" });
    return;
  }

  await kv.set("checkboxes", value);
  res.status(200).json({ success: true });
}
