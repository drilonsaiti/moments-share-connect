import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-hot-toast";
import {createStorageBucketApi} from "../../services/apiStorage.js";

export function useCreateStorageBucket() {
    const queryClient = useQueryClient();

    const {mutate: createStorageBucket, isLoading: isCreating} = useMutation({
        mutationFn: createStorageBucketApi,
        onSuccess: () => {
            toast.success("New storage bucket successfully created");
            queryClient.invalidateQueries({queryKey: ["storages"]});
        },
        onError: (err) => toast.error(err.message),
    });

    return {isCreating, createStorageBucket};
}