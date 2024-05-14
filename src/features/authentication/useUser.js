import {getCurrentUser} from "../../services/apiAuth.js";
import {useQuery} from "@tanstack/react-query";

export function useUser() {
    const {isLoading, data} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    return {isLoading, data, isAuthenticated: data?.role === "authenticated",isAdmin: data?.email.includes(import.meta.env.VITE_EMAIL_ADMIN)};
}
