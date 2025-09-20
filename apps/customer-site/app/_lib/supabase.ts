export const runtime = "nodejs";

import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;
if (!url || !key) {
  throw new Error("Miss SupabaseURL or SupabaseKey in env");
}

export const supabase = createClient(url, key);
