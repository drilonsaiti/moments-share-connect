import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-hot-toast";
import {createEditBucket} from "../../services/apiBucket.js";

export function useEditBucket() {
    const queryClient = useQueryClient();

    const {mutate: editBucket, isLoading: isEditing} = useMutation({
        mutationFn: ({newBucketData, id}) => createEditBucket(newBucketData, id),
        onSuccess: () => {
            toast.success("Bucket successfully edited");
            queryClient.invalidateQueries({queryKey: ["buckets"]});
        },
        onError: (err) => toast.error(err.message),
    });

    return {isEditing, editBucket};
}