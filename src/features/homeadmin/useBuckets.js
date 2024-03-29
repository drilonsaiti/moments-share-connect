import {useQuery} from "@tanstack/react-query";
import {getBuckets} from "../../services/apiBucket.js";

export function useBuckets() {
    const {
        isLoading,
        data: buckets,
        error,
    } = useQuery({
        queryKey: ["buckets"],
        queryFn: getBuckets,
    });

    return {isLoading, error, buckets};
}