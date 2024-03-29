import supabase from "./supabase.js";

export async function getBuckets() {
    const {data, error} = await supabase.from("bucket").select("*");
    console.log("DATA", data);
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }

    return data;
}

export async function getBucketById(bucketId) {
    const {
        data,
        error
    } = await supabase.from("bucket").select("*").eq("bucket_name", "test@test.com2024-03-31").single();
    console.log("DATA", data);
    if (error) {
        console.error(error);
        throw new Error("Buckets could not be loaded");
    }

    return data;
}

export async function createEditBucket(newBucket, id) {
    /*const hasImagePath = newBucket.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newBucket.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath
        ? newBucket.image
        : `${supabaseUrl}/storage/v1/object/public/bucket-images/${imageName}`;

    // 1. Create/edit bucket*/
    let query = supabase.from("bucket");

    // A) CREATE

    if (!id) query = query.insert([{...newBucket}]);

    // B) EDIT
    /* if (id) query = query.update({ ...newBucket, image: imagePath }).eq("id", id);
 */
    const {data, error} = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Buckets could not be created");
    }

    /*// 2. Upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("bucket-images")
        .upload(imageName, newBucket.image);

    // 3. Delete the bucket IF there was an error uplaoding image
    if (storageError) {
        await supabase.from("buckets").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Bucket image could not be uploaded and the bucket was not created"
        );
    }*/

    return data;
}


export async function deleteBucketApi(id) {
    const {data, error} = await supabase.from("bucket").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Bucket could not be deleted");
    }

    return data;
}