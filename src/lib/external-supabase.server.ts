// Server-only Supabase client for the external CMS database. The .server.ts
// filename blocks any client-side import; do NOT import from a browser
// context — go through cms.functions.ts instead.
import { createClient } from "@supabase/supabase-js";

const url = "https://lblrbruclfqxkqmdlmsj.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibHJicnVjbGZxeGtxbWRsbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0Mzk5OTYsImV4cCI6MjEwMjAxNTk5Nn0.1tfvHgSmhDBBhM1wN5k1hz0Y6l2l3Z7-ZC4_jV3WrH0";

export const externalSupabase = createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
