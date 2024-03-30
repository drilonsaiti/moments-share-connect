import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditBucket} from "../../services/apiBucket.js";
import {toast} from "react-hot-toast";
import {editStorageBucketApi} from "../../services/apiStorage.js";

export function useEditStorageBucket() {
    const queryClient = useQueryClient();

    const {mutate: editStorageBucket, isLoading: isEditing} = useMutation({
        mutationFn: ({bucket_name, oldBucket}) => editStorageBucketApi(bucket_name, oldBucket),
        onSuccess: () => {
            toast.success("Bucket storage successfully edited");
            queryClient.invalidateQueries({queryKey: ["bucketStorage"]});
        },
        onError: (err) => toast.error(err.message),
    });

    return {isEditing, editStorageBucket};
}