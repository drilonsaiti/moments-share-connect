import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editCurrentUser} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useEditUser() {
    const queryClient = useQueryClient();

    const {mutate: editUser, isLoading: isUpdating} = useMutation({
        mutationFn: editCurrentUser,
        onSuccess: ({user}) => {
            toast.success("User account successfully updated");
            queryClient.setQueryData(["user"], user);
        },
        onError: (err) => toast.error(err.message),
    });

    return {editUser, isUpdating};
}