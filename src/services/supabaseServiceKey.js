import {createClient} from "@supabase/supabase-js";
import {supabaseUrl} from "./supabase.js";


const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY
const supabseWithServiceKey = createClient(supabaseUrl, supabaseServiceKey);

export default supabseWithServiceKey;