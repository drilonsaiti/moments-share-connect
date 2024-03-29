import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteUserApi} from "../../services/apiAuth.js";

export function useDeleteUser() {
    const queryClient = useQueryClient();

    const {isLoading: isDeleting, mutate: deleteUser} = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: () => {
            toast.success("User successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return {isDeleting, deleteUser};
}