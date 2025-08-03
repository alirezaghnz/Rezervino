import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ttpaxypnlgpojmtnkzir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cGF4eXBubGdwb2ptdG5remlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMjEyNTMsImV4cCI6MjA2OTc5NzI1M30.6L8Ds5KLDDLtu1z6gXkhRZVOehFq6fE_wb7LjHDYoWE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
