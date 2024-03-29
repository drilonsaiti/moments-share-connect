import {useQuery} from "@tanstack/react-query";
import {getGalleries} from "../../services/apiGallery.js";

export function useGalleries() {
    const {
        isLoading,
        data: galleries,
        error,
    } = useQuery({
        queryKey: ["galleries"],
        queryFn: getGalleries,
    });


    return {isLoading, error, galleries};
}