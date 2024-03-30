import {useQuery} from "@tanstack/react-query";
import {getCurrentUser} from "../../services/apiAuth.js";

export function useCurrentUser() {
    const {data, isLoading} = useQuery({
        queryFn: getCurrentUser,
        queryKey: ["currentUser"]
    })

    return {data, isLoading}
}