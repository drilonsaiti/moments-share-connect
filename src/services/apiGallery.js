import supabase from "./supabase.js";

export async function getGalleries(bucketId) {
    const {data, error} = await supabase.from("bucket")
        .select("*")
        .eq("bucket_name", bucketId)
        .single();
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }


    return data;
}


export async function uploadImageApi(newdata) {

    const {data, error} = await supabase.storage.from(newdata.bucketId).upload(`${newdata.filename}`, newdata.image)

    if (error) {
        throw new Error(
            "Image could not be uploaded"
        );
    }

    const {data: currentRecord, error: errorRecord} = await supabase.from("bucket")
        .select("*")
        .eq("bucket_name", newdata.bucketId)
        .single();


    let updatedImageUrls = [...currentRecord.image_urls, newdata.filename]

    let {error: updateError} = await supabase
        .from('bucket')
        .update({image_urls: updatedImageUrls})
        .eq('bucket_name', newdata.bucketId)

    if (updateError) {
        console.log('Error updating record:', updateError)
    }


}