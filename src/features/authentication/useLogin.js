import {useMutation, useQueryClient} from "@tanstack/react-query";
import {loginApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email, password}) => loginApi({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            user.user.email === import.meta.env.VITE_EMAIL_ADMIN ? navigate('/home', {replace: true}) : navigate('/client', {replace: true});
        },
        onError: (err) => {
            console.log('ERROR', err);
            toast.error('Provided email or password are incorrect');
        },
    });

    return {login, isLoading};
}
