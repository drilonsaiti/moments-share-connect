import {useQuery} from "@tanstack/react-query";
import {getGalleries} from "../../services/apiGallery.js";
import {useParams} from "react-router-dom";

export function useGalleries() {
    const {bucketId} = useParams();
    const {
        isLoading,
        data: galleries,
        error,
    } = useQuery({
        queryKey: ["galleries", bucketId],
        queryFn: () => getGalleries(bucketId),
    });


    return {isLoading, error, galleries};
}