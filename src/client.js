import { createClient } from "@supabase/supabase-js";

const URL = "https://pgrmhrcckbbfathmsgbt.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBncm1ocmNja2JiZmF0aG1zZ2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1NTE2NjYsImV4cCI6MTk5ODEyNzY2Nn0.n604al5Gw7RiKOa7gL4QwZvA3MzIyx8u5_HvvMhOPFk";

export const supabase = createClient(URL, API_KEY);
