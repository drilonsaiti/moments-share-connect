import styled, {css} from "styled-components";
import {createPortal} from "react-dom";
import {cloneElement, createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useOutsideClick} from "../hooks/useOutsideClick.js";
import {HiXMark} from "react-icons/hi2";
import Spinner from "./Spinner.jsx";
import FlexGroup from "./FlexGroup.jsx";
import {FaRotate} from "react-icons/fa6";
import {FACING_MODES} from 'react-html5-camera-photo';

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
    overflow-y: ${({overFlowVisible}) => (overFlowVisible ? 'visible' : 'auto')};
    ${(props) =>
            props.imageDisplay === true &&
            css`
                width: 100%;
                height: 100%;
                padding: 1.2rem 1rem;
            `}

`;


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100lvh;
    background-color: var(--backdrop-color-black);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`;

const ButtonClose = styled.button`
    background: none;

    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 7rem;
    left: 6rem;
    text-shadow: 1px 1px 2px #000;
    font-size: 2rem;


    /* @media not all and (min-resolution:.001dpcm) {
         @media {
                 bottom: 14rem !important;
         }
     }
 
     @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
             bottom: 13rem !important;
     }*/

    ${(props) =>
            (window.navigator.userAgent.toString().indexOf("Firefox")) &&
            css`
                bottom: 10rem;
            `};

    ${(props) =>
            (window.navigator.userAgent.toString().indexOf("Safari")) &&
            css`
                bottom: 14rem;
            `};

    ${(props) =>
            (window.navigator.userAgent.toString().indexOf("Chrome")) &&
            css`
                bottom: 12rem;
            `};

    ${(props) =>
            (window.navigator.brave) &&
            css`
                bottom: 7rem;
            `};





`;
const ButtonX = styled.button`
    background: none;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 14rem;
    right: 4rem;

    ${(props) =>
            (window.navigator.brave) &&
            css`
                top: 6rem !important;
            `};

    @media not all and (min-resolution: .001dpcm) {
        @media {
            top: 16rem !important;

            ${(props) =>
                    props.imageDisplay &&
                    css`
                        top: 4rem !important;
                        right: 4rem !important;
                    `}
        }
    }

    @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
        top: 11rem ;

        ${(props) =>
                props.imageDisplay &&
                css`
                    top: 4rem !important;
                    right: 4rem !important;
                `}
    }

    ${(props) =>
            !props.imageDisplay &&
            css`
                top: 6rem;
                right: 7rem;
            `}
    & svg {
        width: 2.8rem;
        height: 2.8rem;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .4));
        color: #fff;
    }
`;
const ButtonUsePhoto = styled.button`
    background: none;

    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 4rem;
    right: 3rem;
    text-shadow: 1px 1px 2px #000;
    font-size: 1.7rem;


    & svg {
        width: 2.4rem;
        height: 2.4rem;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
        color: var(--color-grey-0);
    }
`;
const ButtonTakePhoto = styled.button`
    background: none;

    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 4rem;
    left: 1rem;
    text-shadow: 1px 1px 2px #000;
    font-size: 1.7rem;


    & svg {
        width: 2.4rem;
        height: 2.4rem;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
        color: var(--color-grey-700);
    }
`;

const ButtonSwitch = styled.button`
    background: none;

    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 14rem;
    left: 7rem;
    stroke: #fff;

    ${(props) =>
            (window.navigator.brave) &&
            css`
                top: 6rem !important;
            `};

    @media not all and (min-resolution: .001dpcm) {
        @media {
            top: 16rem !important;

            ${(props) =>
                    props.imageDisplay &&
                    css`
                        top: 4rem !important;
                        right: 4rem !important;
                    `}
        }
    }

    @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
        top: 11rem ;

        ${(props) =>
                props.imageDisplay &&
                css`
                    top: 4rem !important;
                    right: 4rem !important;
                `}
    }


    & svg {
        width: 2.2rem;
        height: 2.2rem;
        color: var(--color-grey-700);
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .4));
    }
`;

const SpinnerContainer = styled.div`
    z-index: 9999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Uploading = styled.p`
    text-shadow: 1px 1px 2px #000;
`
const ModalContext = createContext();

const ModalCamera = ({children, overFlowVisibile, resetImage, onCameraRotate}) => {
    const [openName, setOpenName] = useState('');

    const close = useCallback(() => {
        setOpenName('');
        resetImage();
    }, [resetImage]);
    const open = setOpenName;
    const contextValue = useMemo(() => ({
        openName,
        close,
        open,
        onCameraRotate
    }), [openName, close, open, onCameraRotate]);

    return <ModalContext.Provider value={contextValue}
                                  onCameraRotate={onCameraRotate}>{children}</ModalContext.Provider>;
}


const Open = ({children, opens: opensWindowName, handleIsOpenCamera}) => {
    const {open} = useContext(ModalContext);
    return cloneElement(children, {
        onClick: () => {
            open(opensWindowName)
            handleIsOpenCamera();
        }
    });
}


const Window = ({children, name, overFlowVisible, imageDisplay, resetImage, handleTakePhoto}) => {
    const {openName, close, onCameraRotate} = useContext(ModalContext);
    const ref = useOutsideClick(close);
    const [spinner, setSpinner] = useState(false);
    const [facingCamera, setFacingCamera] = useState(true);
    const [facingMode, setFacingMode] = useState(FACING_MODES.USER);
    const browser = window.navigator;

    useEffect(() => {
        if (facingCamera) {
            setFacingMode(FACING_MODES.USER)
        } else {
            setFacingMode(FACING_MODES.ENVIRONMENT);
        }
    }, [facingCamera]);

    if (name !== openName) return null;
    const handleAnimationEnd = () => {
        close();
    };

    const fadeOutStyles = {
        opacity: openName === name ? 1 : 0,
        transition: 'opacity 0.3s ease-out'
    };

    const handleUsePhoto = () => {
        setSpinner(true)
        handleTakePhoto();
    }

    const handleCameraRotate = () => {
        setFacingCamera(!facingCamera);
    }
    return createPortal(
        <Overlay>
            <StyledModal ref={ref} onClick={(e) => e.stopPropagation()}
                         style={fadeOutStyles}
                         onAnimationEnd={handleAnimationEnd}
                         overFlowVisible={overFlowVisible}
                         imageDisplay={imageDisplay}>
                {!imageDisplay && <ButtonClose style={{zIndex: '999'}} onClick={close} browser={browser}
                                               test={browser}>Cancel</ButtonClose>}
                {!imageDisplay &&
                    <ButtonSwitch style={{zIndex: '999'}} onClick={onCameraRotate}><FaRotate/></ButtonSwitch>}
                <ButtonX imageDisplay={imageDisplay} onClick={close}
                         style={{zIndex: '998', color: 'red'}}><HiXMark/></ButtonX>

                {imageDisplay &&
                    <ButtonTakePhoto style={{zIndex: '999'}} onClick={resetImage}>Take new photo</ButtonTakePhoto>}

                {imageDisplay &&
                    <ButtonUsePhoto style={{zIndex: '999'}} onClick={handleUsePhoto}>Use photo </ButtonUsePhoto>}
                <div style={{width: imageDisplay ? '100%' : '', height: imageDisplay ? '100%' : ''}}>
                    {cloneElement(children, {
                        onCloseModal: close,
                        facingCameraMode: facingCamera
                    })}
                    {spinner && <SpinnerContainer>
                        <FlexGroup>
                            <Spinner/>
                            <Uploading>Uploading...</Uploading>
                        </FlexGroup>
                    </SpinnerContainer>}
                </div>
            </StyledModal>
        </Overlay>,
        document.body
    );
};


ModalCamera.Open = Open;
ModalCamera.Window = Window;

export default ModalCamera;