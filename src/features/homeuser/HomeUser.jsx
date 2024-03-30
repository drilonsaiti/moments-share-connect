import styled from "styled-components";
import Paragraph from "../../ui/Paragraph.jsx";
import Seperator from "../../ui/Seperator.jsx";
import Heading from "../../ui/Heading.jsx";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Button from "../../ui/Button.jsx";
import Footer from "../../ui/Footer.jsx";
import DarkModeToggle from "../../ui/DarkModeToggle.jsx";
import React, {useState} from "react";
import ButtonIconSocial from "../../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";
import {useWindowSize} from "@tofusoup429/use-window-size";
import Camera, {FACING_MODES, IMAGE_TYPES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ModalCamera from "../../ui/ModalCamera.jsx";
import {useUploadImage} from "./useUploadImage.js";
import Compressor from 'compressorjs';
import {useParams} from "react-router-dom";

const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 2rem 4rem;
    width: 100%;
    display: grid;
    grid-template-rows: min-content min-content 50%;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    height: 100vh;

    @media only screen and (min-width: 900px) {
        align-items: normal;
    }
    @media only screen and (min-width: 450px) {
        grid-template-rows: min-content min-content 0;
    }
    @media only screen and (max-height: 670px) {
        grid-template-rows: min-content min-content 30%;
    }
    @media only screen and (max-height: 650px) {
        grid-template-rows: min-content min-content 40%;
    }
    @media only screen and (max-height: 500px) {
        grid-template-rows: min-content min-content 30%;
    }
    @media only screen and (max-height: 400px) {
        grid-template-rows: min-content min-content 20%;
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const FooterContainer = styled.div`
    position: absolute;
    bottom: 3%;
    align-self: center;

    @media only screen and (max-width: 900px) {
        margin-bottom: 2rem;
    }
`

const ActionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`


const HomeUser = ({onCloseModal, onCloseHandle}) => {
    const [image, setImage] = useState();
    const [isOpenCamera, setIsOpenCamera] = useState(false);
    let {width, height} = useWindowSize()
    const {bucketId} = useParams();
    const {uploadImage, isCreating} = useUploadImage();
    const [compressedFile, setCompressedFile] = useState(null);
    const handleButtonClick = () => {

    };

    async function handleTakePhoto() {

        if (!image) {
            console.error('Data URI is undefined.');
            return;
        }

        const byteString = atob(image.split(',')[1]);
        const mimeString = image.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([ab], {type: mimeString});
        const filename = `${bucketId}-${Math.random()}`;

        const file = new File([blob], filename, {type: mimeString});
        const compressor = new Compressor(file, {
            quality: 0.8,
            convertTypes: ["image/jpeg"],
            maxWidth: Infinity,
            maxHeight: Infinity,
            convertSize: 5000000,
            success: (compressedResult) => {
                setCompressedFile(compressedResult)
            },
        });

        console.log(onCloseModal);
        uploadImage({image: compressor.file, filename, bucketId}, {
            onSuccess: () => {
                setImage(null);
                onCloseModal?.();
                onCloseHandle?.();
                setIsOpenCamera(false)
            },
        });

    }

    const resetImage = () => {
        setImage(null);
        setIsOpenCamera(true)
    };

    const handleIsOpenCamera = () => {
        setIsOpenCamera(true);
    }
    return (
        <StyledHome>
            <FlexGroup type="row" style={{justifyContent: 'center', alignSelf: 'start'}}>
                <FlexGroup style={{gap: 0, alignItems: 'center'}}>
                    <FlexGroup type="row" changeDirection>
                        <Heading style={{alignSelf: 'center', textAlign: 'center'}}>SemaDaka Events</Heading>
                        <ButtonIconSocial type="icon">
                            <FaInstagram/>
                        </ButtonIconSocial>
                    </FlexGroup>

                    <Heading type="h4" subheading>
                        <ActionLink href="tel:+38970000000">
                            +38970000000
                        </ActionLink>
                    </Heading>

                </FlexGroup>
                <DarkModeToggle absolute/>

            </FlexGroup>
            <Seperator/>
            <FlexGroup style={{alignSelf: 'start', marginTop: '2rem'}}>
                <Heading type="h3" style={{alignSelf: 'center', textAlign: 'center'}}>
                    📸 From the Event: Share Your Love Through Photos!
                </Heading>
                <Paragraph>
                    Capture the magic of our day with your lens, and your snapshots will forever be cherished in our
                    hearts. Thank you for being part of our story!
                </Paragraph>
            </FlexGroup>

            <ButtonContainer style={{alignSelf: 'center'}}>

                <ModalCamera resetImage={resetImage}>

                    <ModalCamera.Open opens={"take-photo"} handleIsOpenCamera={handleIsOpenCamera}>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleButtonClick();
                                setImage(null)
                            }}
                        > Take a photo
                        </Button>
                    </ModalCamera.Open>
                    {image &&
                        <ModalCamera.Window name={"take-photo"} imageDisplay={image !== null} resetImage={resetImage}
                                            handleTakePhoto={handleTakePhoto}>
                            <img src={image} alt="image"/>
                        </ModalCamera.Window>}
                    {(!image && isOpenCamera) &&
                        <ModalCamera.Window name={"take-photo"} imageDisplay={image} handleTakePhoto={handleTakePhoto}>

                            <Camera
                                onTakePhoto={(dataUri) => {
                                    setImage(dataUri);

                                }}

                                isMaxResolution={true}
                                isImageMirror={true}
                                isFullscreen={true}
                                idealFacingMode={FACING_MODES.USER}
                                imageType={IMAGE_TYPES.JPG}
                            />
                        </ModalCamera.Window>}
                </ModalCamera>
            </ButtonContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </StyledHome>

    );
};

export default HomeUser;