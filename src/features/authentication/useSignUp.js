/*
import {useMutation} from "@tanstack/react-query";
import {signUp} from "../../services/apiAuth.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";


export function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            toast.success(
                "Account successfully created! Please verufy the new account from the user's email address."
            );
        },
    });

    return { signup, isLoading };
}*/
