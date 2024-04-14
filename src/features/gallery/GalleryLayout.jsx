import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Lightbox from "yet-another-react-lightbox";
import {Counter, Download, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import InputCheckbox from "../../ui/InputCheckbox.jsx";
import {useGalleries} from "./useGalleries.js";
import Spinner from "../../ui/Spinner.jsx";
import {supabaseStorageUrl} from "../../services/supabase.js";
import {useCurrentUser} from "../authentication/useCurrentUser.js";
import AccessDenied from "../../ui/AccessDenied.jsx";

const Grids = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    justify-items: ${(props) => props.justifyItems};
    gap: 1rem;
`;

const Input = styled.input`

    z-index: 999;
    position: absolute;
    top: 1%;
    left: 2%;
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: var(--shadow-md);
    background-color: white;

    &:checked {
        background-color: green; /* Change to your desired color */
    }

    &:checked ~ .checkmark {
        background-color: red;
    }

`

const GalleryLayout = ({gridNum, select, checkedAll, updateSelectedImagesLength}) => {
    const {galleries, isLoading} = useGalleries();
    const {data, isLoading: isLoadingCurrentUser} = useCurrentUser();
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [selectedImages, setSelectedImages] = useState([]);
    let slides = [];

    useEffect(() => {
        if (checkedAll && selectedImages.length !== slides.length) {
            const selectedImageUrls = slides?.map(slide => slide.src);
            setSelectedImages(prevSelectedImages => {
                return Array.from(new Set([...prevSelectedImages, ...selectedImageUrls]));
            });
        }
    }, [checkedAll, slides]);

    useEffect(() => {
        updateSelectedImagesLength(selectedImages);
    }, [selectedImages, updateSelectedImagesLength]);


    const handleSelectedImage = (imageUrl) => {
        if (!selectedImages.includes(imageUrl)) {
            setSelectedImages((prevSelectedImages) => [...prevSelectedImages, imageUrl]);
        } else {
            setSelectedImages((prevSelectedImages) => prevSelectedImages.filter((image) => image !== imageUrl));
        }
    };

    if (isLoading || isLoadingCurrentUser) return <Spinner/>
    if (galleries && galleries.image_urls && galleries.image_urls.length > 0) {
        slides = galleries.image_urls.map(url => ({src: supabaseStorageUrl + galleries.bucket_name + "/" + url}));
    } else {
        console.log("No image URLs available in the galleries object.");
    }

    if (data?.user.email !== galleries?.email) return <AccessDenied/>
    return (
        <div>
            <Grids columns={`repeat(${gridNum}, 1fr)`} style={{justifyItems: 'center'}}>
                {slides?.map((slide, index) => (
                    <div key={index} style={{position: 'relative'}}>
                        {select &&
                            <InputCheckbox checkedAll={checkedAll} onClick={() => handleSelectedImage(slide.src)}/>}
                        <img
                            key={index}
                            src={slide.src}
                            alt={`Grid Image ${index + 1}`}
                            onClick={() => setSelectedImageIndex(index)}
                            style={{cursor: 'pointer', objectFit: 'contain'}}
                        />
                    </div>
                ))}


            </Grids>

            <Lightbox

                slides={slides}
                plugins={[Fullscreen, Counter, Download, Zoom, Thumbnails]}
                counter={{container: {style: {top: 0, bottom: 'unset'}}}}
                index={selectedImageIndex}
                open={selectedImageIndex >= 0}
                close={() => setSelectedImageIndex(-1)}
                enableZoom={true}
            />

        </div>
    );
};

export default GalleryLayout;
