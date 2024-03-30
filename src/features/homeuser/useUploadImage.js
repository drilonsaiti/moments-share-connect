import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {uploadImageApi} from "../../services/apiGallery.js";

export function useUploadImage() {
    //const queryClient = useQueryClient();
    //const {bucketId} = useParams();

    const {mutate: uploadImage, isLoading: isCreating} = useMutation({
        mutationFn: uploadImageApi,
        onSuccess: () => {
            toast.success("New image successfully uploaded");
            //queryClient.invalidateQueries({ queryKey: ["galleries",bucketId] });
        },
        onError: (err) => toast.error(`ERROR: ${err.message}`),
    });

    return {isCreating, uploadImage};
}