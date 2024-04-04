import {useQuery} from "@tanstack/react-query";
import {checkBucketId} from "../../services/apiBucket.js";
import {useParams} from "react-router-dom";

export function useCheckBucketId() {
    const {bucketId} = useParams();
    const {
        isLoading,
        data: buckets,
        error,
    } = useQuery({
        queryKey: ["buckets"],
        queryFn: () => checkBucketId(bucketId),
    });

    return {isLoading, error, buckets};
}