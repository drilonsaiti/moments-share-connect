import supabase from "./supabase.js";
import supabseWithServiceKey from "./supabaseServiceKey.js";

export async function getBuckets() {
    const {data, error} = await supabase.from("bucket").select("*");
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }

    return data;
}

export async function getBucketsLength() {
    const {count, error} = await supabase.from("bucket").select('*', {count: 'estimated'});
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }

    return count;
}

export async function getBucketById(bucketEmail) {
    const {
        data,
        error
    } = await supabase.from("bucket").select("*").eq("email", bucketEmail);
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }

    return data;
}

export async function createEditBucket(newBucket, id, bucket_name) {

    let query = supabase.from("bucket");


    if (!id) query = query.insert([{...newBucket}]);

    if (id) query = query.update({...newBucket, bucket_name: bucket_name}).eq("id", id);

    const {data, error} = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Buckets could not be created");
    }

    return data;
}


export async function checkBucketId(id) {
    const {data, error} = await supabase.from("bucket").select("*")
        .eq("bucket_name", id);
    return data;
}

export async function deleteBucketApi(id, bucketName) {
    const {data, error} = await supabase.from("bucket").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Bucket could not be deleted");
    }
    const {data2, error2} = await supabseWithServiceKey
        .storage
        .deleteBucket(bucketName)

    if (error2) {
        console.error(error2);
        throw new Error("Storage bucket could not be deleted");
    }

    return data;
}