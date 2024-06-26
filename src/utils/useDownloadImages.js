import JSZip from "jszip";

export const downloadImages = (selectedImages) => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop && selectedImages.length > 1) {
        const zip = new JSZip();
        const folderName = 'selected_images';

        selectedImages.forEach((imageUrl, index) => {

            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    zip.file(`${folderName}/image_${index + 1}.jpg`, blob);
                    if (index === selectedImages.length - 1) {
                        zip.generateAsync({type: "blob"}).then(content => {
                            const link = document.createElement('a');
                            link.href = URL.createObjectURL(content);
                            link.setAttribute('download', 'selected_images.zip');
                            link.click();
                            document.body.removeChild(link);
                        });
                    }
                });
        });
    } else {
        selectedImages.forEach(imageUrl => {
            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    let parts = imageUrl.split('/');
                    let imageName = parts[parts.length - 1];
                    a.href = url;
                    a.download = `${imageName}.jpg`;
                    a.click();
                });
        });
    }
}