import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {getBucketById} from "../../services/apiBucket.js";

export function useBucket() {
    const {bucketId} = useParams();

    const {
        isLoading,
        data: bucket,
        error,
    } = useQuery({
        queryKey: ["bucket", bucketId],
        queryFn: () => getBucketById(bucketId),
        retry: false,
    });

    return {isLoading, error, bucket};
}
