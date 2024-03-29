import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-hot-toast";
import {createEditBucket} from "../../services/apiBucket.js";

export function useCreateBucket() {
    const queryClient = useQueryClient();

    const {mutate: createBucket, isLoading: isCreating} = useMutation({
        mutationFn: createEditBucket,
        onSuccess: () => {
            toast.success("New bucket successfully created");
            queryClient.invalidateQueries({queryKey: ["buckets"]});
        },
        onError: (err) => toast.error(err.message),
    });

    return {isCreating, createBucket};
}