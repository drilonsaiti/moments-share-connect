import {createClient} from "@supabase/supabase-js";

/* global process */
export const supabaseUrl = "https://oxutrsoifjpnoqcvlkzp.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;