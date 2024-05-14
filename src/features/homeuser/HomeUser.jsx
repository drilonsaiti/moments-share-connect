import styled from "styled-components";
import Paragraph from "../../ui/Paragraph.jsx";
import Seperator from "../../ui/Seperator.jsx";
import Heading from "../../ui/Heading.jsx";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Button from "../../ui/Button.jsx";
import DarkModeToggle from "../../ui/DarkModeToggle.jsx";
import {useRef, useState} from "react";
import ButtonIconSocial from "../../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";
import Camera, {FACING_MODES, IMAGE_TYPES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ModalCamera from "../../ui/ModalCamera.jsx";
import {useUploadImage} from "./useUploadImage.js";
import Compressor from 'compressorjs';
import {useParams} from "react-router-dom";
import {useCheckBucketId} from "../homeadmin/useCheckBucketId().js";
import Spinner from "../../ui/Spinner.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import Icon from "../../ui/Icon.jsx";
import PageNotFound from "../../pages/PageNotFound.jsx";
import EventExpire from "../../ui/EventExpire.jsx";

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
        height: 100dvh;
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
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
`

const FooterContainer = styled.div`

`

const ActionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`
const Contact = styled.a`
    display: flex;
    text-align: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
    gap: 1rem;
    cursor: pointer;

`

const ParagraphInsta = styled.p`
    text-decoration: underline;
    margin-bottom: 3px;

    &:hover {
        color: var(--color-brand-600);
    }
`


const HomeUser = ({onCloseModal, onCloseHandle, facingCameraMode, browser}) => {
    const [image, setImage] = useState();
    const [file, setFile] = useState();
    const [isOpenCamera, setIsOpenCamera] = useState(false);
    const {bucketId} = useParams();
    const {buckets, isLoading} = useCheckBucketId();
    const {uploadImage, isCreating} = useUploadImage();
    const [compressedFile, setCompressedFile] = useState(null);
    const device = window.navigator.userAgent.toLowerCase();
    const [facingCamera, setFacingCamera] = useState(true);
    const [facingMode, setFacingMode] = useState(FACING_MODES.USER);
    const fileInputRef = useRef(null);

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            const file = files[0];
            const filename = `${bucketId}-${Math.random()}`;


            if (file.type.startsWith("image/")) {
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

                uploadImage({image: compressor.file, filename, bucketId}, {
                    onSuccess: () => {
                        setFile((prevFile) => !prevFile);
                        setImage(null);
                        onCloseModal?.();
                        onCloseHandle?.();
                        setIsOpenCamera(false)
                    },
                });
            } else {
                uploadImage({image: file, filename, bucketId}, {
                    onSuccess: () => {
                        setFile((prevFile) => !prevFile);
                        setImage(null);
                        onCloseModal?.();
                        onCloseHandle?.();
                        setIsOpenCamera(false)
                    },
                });
            }
        }
    };

    const handleCameraRotate = () => {
        const mode = !facingCamera;
        if (mode) {
            setFacingMode(FACING_MODES.USER)
        } else {
            setFacingMode(FACING_MODES.ENVIRONMENT)

        }
        setFacingCamera(!facingCamera);
    }

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

    if (isLoading) return <Spinner/>
    if (buckets.length === 0) return <PageNotFound/>
    const eventDate = new Date(buckets[0]?.date);
    const expirationTime = new Date(eventDate.getTime() + 40 * 60 * 60 * 1000);
    if (expirationTime <= new Date()) return <EventExpire/>

    return (
        <StyledHome>
            <FlexGroup type="row" style={{justifyContent: 'center', alignSelf: 'start'}}>
                <FlexGroup style={{gap: 0, alignItems: 'center'}}>
                    <FlexGroup type="row" changeDirection>
                        <Heading style={{alignSelf: 'center', textAlign: 'center'}}>Sema Event</Heading>
                        <ButtonIconSocial type="icon">
                            <FaInstagram/>
                        </ButtonIconSocial>
                    </FlexGroup>

                    <Heading type="h4" subheading>
                        <Contact href="https://www.instagram.com/sema.event/">
                            <Icon>
                                <FaInstagram/>
                            </Icon>
                            <ParagraphInsta>
                                sema.event
                            </ParagraphInsta>
                        </Contact>
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

                <ModalCamera resetImage={resetImage} onCameraRotate={handleCameraRotate}>

                    <ModalCamera.Open opens={"take-photo"} handleIsOpenCamera={handleIsOpenCamera}>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation()
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

                        <ModalCamera.Window name={"take-photo"} imageDisplay={image} handleTakePhoto={handleTakePhoto}
                                            browser={browser}>

                            <Camera
                                onTakePhoto={(dataUri) => {
                                    setImage(dataUri);

                                }}

                                isMaxResolution={true}
                                isImageMirror={device.includes("android") ? false : facingCamera}
                                isFullscreen={true}
                                idealFacingMode={facingMode}
                                imageType={IMAGE_TYPES.JPG}
                            />
                        </ModalCamera.Window>

                    }
                </ModalCamera>
                <Button variation="secondary"
                        onClick={handleUpload}
                > {!file ? 'Upload photo/video' :
                    <FlexGroup type="row" style={{justifyContent: 'center'}}><SpinnerMini/> <span>Uploading...</span>
                    </FlexGroup>}
                </Button>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => {
                        setFile(!file);
                        handleFileChange(e)
                    }}
                    style={{display: 'none'}}
                />
                <p style={{
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    color: 'var(--color-grey-300)',
                    marginBottom: '2rem'
                }}>*Please note, this button is for selecting photos, not taking them.For capturing new moments, use the
                    Take a photo button
                    instead
                </p>
            </ButtonContainer>

        </StyledHome>

    );
};

export default HomeUser;