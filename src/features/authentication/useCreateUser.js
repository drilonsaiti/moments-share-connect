import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {createUserApi} from "../../services/apiAuth.js";


export function useCreateUser() {
    const {mutate: createUser, isLoading} = useMutation({
        mutationFn: createUserApi,
        onSuccess: (user) => {
            toast.success(
                "Account successfully created!"
            );

        },
    });

    return {createUser, isLoading};
}
