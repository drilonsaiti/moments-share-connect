import supabase from "./supabase.js";

export async function getGalleries() {
    const {data, error} = await supabase.from("bucket")
        .select("*")
        .eq("bucket_name", 'test@test.com2024-03-31')
        .single();
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }

    return data;
}