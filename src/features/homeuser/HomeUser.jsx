import styled from "styled-components";
import Paragraph from "../../ui/Paragraph.jsx";
import Seperator from "../../ui/Seperator.jsx";
import Heading from "../../ui/Heading.jsx";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Button from "../../ui/Button.jsx";
import Footer from "../../ui/Footer.jsx";
import DarkModeToggle from "../../ui/DarkModeToggle.jsx";
import React, {useRef, useState} from "react";
import ButtonIconSocial from "../../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";
import {HiCamera} from "react-icons/hi2";
import {useWindowSize} from "@tofusoup429/use-window-size";
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ModalCamera from "../../ui/ModalCamera.jsx";

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

function capture(imgSrc) {
    console.log(imgSrc);
}

const HomeUser = () => {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState();
    let {width, height} = useWindowSize()
    const cam = useRef(null);
    const [isOpenCamera, setIsOpenCamera] = useState(false);

    const handleButtonClick = () => {
        setIsOpenCamera(true);
        fileInputRef.current.click();
    };

    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        setImage(dataUri);
        console.log('takePhoto', dataUri);
    }

    function handleTakePhotoAnimationDone(dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const imageUrl = event.target.result;
            // Set the imageUrl to state or use it directly to display the image
            setImage(imageUrl);
            console.log(imageUrl);
        };

        reader.readAsDataURL(file);
    };
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

            {/*<Button size="large" style={{alignSelf: 'center'}}>
                    Take a photo
                </Button>*/}
            <ButtonContainer style={{alignSelf: 'center'}}>
                {/* <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="user"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{display: 'none'}}
            />
            <Button
                variant="contained"
                color="primary"
                startIcon={<HiCamera/>}
                onClick={handleButtonClick}
            >
                Take a photo
            </Button>
            </ButtonContainer>
            {image && (
                <img
                    src={image}
                    alt="Captured Image"
                    style={{ transform:'scaleX(-1)'}}
                />
            )}*/}
                <ModalCamera>
                    <ModalCamera.Open opens={"take-photo"}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<HiCamera/>}
                            onClick={handleButtonClick}
                        > Take a photo
                        </Button>
                    </ModalCamera.Open>
                    <ModalCamera.Window name={"take-photo"}>
                        <Camera
                            onTakePhoto={(dataUri) => {
                                handleTakePhoto(dataUri);
                            }}
                            onTakePhotoAnimationDone={() => {
                                handleTakePhotoAnimationDone();
                            }}
                            isMaxResolution={true}
                            isImageMirror={true}
                            isFullscreen={true}
                            idealFacingMode={FACING_MODES.USER}
                        />
                    </ModalCamera.Window>
                </ModalCamera>
            </ButtonContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </StyledHome>

    );
};

export default HomeUser;