import supabseWithServiceKey from "./supabaseServiceKey.js";
import supabase from "./supabase.js";

export async function createStorageBucketApi({bucket_name}) {
    const {data, error} = await supabseWithServiceKey.storage.createBucket(bucket_name, {
        public: true,
        allowedMimeTypes: ['image/*'],

    })

    if (error) throw new Error(error.message);

    return data;

}

export async function editStorageBucketApi({bucket_name, oldBucket}) {
    await supabseWithServiceKey.storage.createBucket(bucket_name, {
        public: true,
        allowedMimeTypes: ['image/*'],

    })

    /*// Get a list of all files in the old bucket
    const { data: oldBucketFiles, error } = await supabase.storage.from(oldBucket).list()

    if (error) {
        console.log('Error listing files:', error);
        return;
    }*/

    // Move each file from the old bucket to the new bucket
    /*for (const file of oldBucketFiles) {
    } */
    await supabseWithServiceKey.storage
        .from(oldBucket).move(oldBucket, bucket_name);


    // Delete the old bucket
    await supabase.storage.deleteBucket(oldBucket);
}

