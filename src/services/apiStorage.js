import supabseWithServiceKey from "./supabaseServiceKey.js";

export async function createStorageBucketApi({bucket_name}) {
    console.log(bucket_name);
    const {data, error} = await supabseWithServiceKey.storage.createBucket(bucket_name, {
        public: true,
        allowedMimeTypes: ['image/*'],

    })

    if (error) throw new Error(error.message);

    return data;

}