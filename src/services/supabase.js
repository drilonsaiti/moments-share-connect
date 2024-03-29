import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = "https://oxutrsoifjpnoqcvlkzp.supabase.co";
export const supabaseStorageUrl = supabaseUrl + "/storage/v1/object/public/";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;