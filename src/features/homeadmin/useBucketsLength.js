import {useQuery} from "@tanstack/react-query";
import {getBucketsLength} from "../../services/apiBucket.js";

export function useBucketsLength() {
    const {
        isLoading,
        data: buckets,
        error,
    } = useQuery({
        queryKey: ["bucketsLength"],
        queryFn: getBucketsLength,
    });

    return {isLoading, error, buckets};
}