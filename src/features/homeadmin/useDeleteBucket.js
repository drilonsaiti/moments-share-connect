import toast from "react-hot-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteBucketApi} from "../../services/apiBucket.js";

export function useDeleteBucket() {
    const queryClient = useQueryClient();

    const {isLoading: isDeleting, mutate: deleteBucket} = useMutation({
        mutationFn: deleteBucketApi,
        onSuccess: () => {
            toast.success("Bucket successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["buckets"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return {isDeleting, deleteBucket};
}