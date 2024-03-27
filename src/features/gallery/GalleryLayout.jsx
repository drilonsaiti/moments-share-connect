import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import Lightbox from "yet-another-react-lightbox";
import {Counter, Download, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import InputCheckbox from "../../ui/InputCheckbox.jsx";

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

const GalleryLayout = ({gridNum, select,checkedAll,updateSelectedImagesLength}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [selectedImages, setSelectedImages] = useState([]);
    const slides = useMemo(() => [
        {
            src: 'https://localhost:5173/grid-image-1.jpg',
            title: 'Image 1',
            description: 'Description of image 1'
        },
        {
            src: 'https://localhost:5173/grid-image-2.jpg',
            title: 'Image 2',
            description: 'Description of image 2'
        }
    ], []);

    useEffect(() => {
        if (checkedAll && selectedImages.length !== slides.length) {
            const selectedImageUrls = slides.map(slide => slide.src);
            setSelectedImages(prevSelectedImages => {
                return Array.from(new Set([...prevSelectedImages, ...selectedImageUrls]));
            });
        }
    }, [checkedAll, slides]);

    useEffect(() => {
        // Call the function to update selected images length
        updateSelectedImagesLength(selectedImages);
    }, [selectedImages, updateSelectedImagesLength]);


    const handleSelectedImage = (imageUrl) => {
        if (!selectedImages.includes(imageUrl)) {
            setSelectedImages((prevSelectedImages) => [...prevSelectedImages, imageUrl]);
        }else{
            setSelectedImages((prevSelectedImages) => prevSelectedImages.filter((image) => image !== imageUrl));
        }
    };

    return (
        <div>
            <Grids columns={`repeat(${gridNum}, 1fr)`} style={{justifyItems: 'center'}}>
                {slides.map((slide, index) => (
                    <div key={index} style={{position: 'relative'}}>
                        {select  && <InputCheckbox checkedAll={checkedAll} onClick={() => handleSelectedImage(slide.src)}/>}
                        <img
                            key={index}
                            src={slide.src} // Replace with your image URLs
                            alt={`Grid Image ${index + 1}`}
                            onClick={() => setSelectedImageIndex(index)}
                            style={{cursor: 'pointer'}}
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
