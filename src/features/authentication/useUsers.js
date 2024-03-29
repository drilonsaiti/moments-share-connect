import {useQuery} from "@tanstack/react-query";
import {getUsers} from "../../services/apiAuth.js";

export function useUsers() {
    const {
        isLoading,
        data: users,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    return {isLoading, error, users};
}