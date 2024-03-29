import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {createUserApi} from "../../services/apiAuth.js";


export function useCreateUser() {
    const {mutate: createUser, isLoading} = useMutation({
        mutationFn: createUserApi,
        onSuccess: (user) => {
            toast.success(
                "Account successfully created! Please verify the new account from the user's email address."
            );

        },
    });

    return {createUser, isLoading};
}
