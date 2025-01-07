import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log(supabaseUrl, supabaseAnonKey);
console.log(createClient);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log(supabase);
