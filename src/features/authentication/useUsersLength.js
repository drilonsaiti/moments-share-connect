import {useQuery} from "@tanstack/react-query";
import {getUsersLength} from "../../services/apiAuth.js";

export function useUsersLength() {
    const {
        isLoading,
        data: users,
        error,
    } = useQuery({
        queryKey: ["userLength"],
        queryFn: getUsersLength,
    });

    return {isLoading, error, users};
}