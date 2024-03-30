import {useQuery} from "@tanstack/react-query";
import {getBucketById} from "../../services/apiBucket.js";


export function useBucket(email) {

    const {
        isLoading,
        data: bucket,
        error,
    } = useQuery({
        queryKey: ["bucket", email],
        queryFn: () => getBucketById(email),
        retry: false,
    });

    return {isLoading, error, bucket};
}
