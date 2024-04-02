import styled, {css} from "styled-components";
import {createPortal} from "react-dom";
import {cloneElement, createContext, useCallback, useContext, useMemo, useState} from "react";
import {useOutsideClick} from "../hooks/useOutsideClick.js";
import {HiXMark} from "react-icons/hi2";
import Spinner from "./Spinner.jsx";
import FlexGroup from "./FlexGroup.jsx";

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
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 9rem;
    left: 6rem;

    &:hover {
        background-color: var(--color-grey-0);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */
        color: var(--color-grey-0);
    }
`;
const ButtonX = styled.button`
    background-color: #000;
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
            !props.imageDisplay &&
            css`
                top: 6rem;
                right: 7rem;
            `}
    &:hover {
        background-color: var(--color-grey-0);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */
        color: #fff;
    }
`;
const ButtonUsePhoto = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 4rem;
    right: 3rem;

    &:hover {
        background-color: var(--color-grey-0);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */
        color: var(--color-grey-0);
    }
`;
const ButtonTakePhoto = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 4rem;
    left: 4rem;

    &:hover {
        background-color: var(--color-grey-0);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */
        color: var(--color-grey-700);
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

const ModalCamera = ({children, overFlowVisibile, resetImage}) => {
    const [openName, setOpenName] = useState('');

    const close = useCallback(() => {
        setOpenName('');
        resetImage(); // Call the resetImage function when the modal is closed
    }, [resetImage]);
    const open = setOpenName;
    const contextValue = useMemo(() => ({openName, close, open}), [openName, close, open]);

    return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
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
    const {openName, close} = useContext(ModalContext);
    const ref = useOutsideClick(close);
    const [spinner, setSpinner] = useState(false);


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
    return createPortal(
        <Overlay>
            <StyledModal ref={ref} onClick={(e) => e.stopPropagation()}
                         style={fadeOutStyles}
                         onAnimationEnd={handleAnimationEnd}
                         overFlowVisible={overFlowVisible}
                         imageDisplay={imageDisplay}>
                {!imageDisplay && <ButtonClose style={{zIndex: '999'}} onClick={close}>Cancel</ButtonClose>}

                <ButtonX imageDisplay={imageDisplay} onClick={close}
                         style={{zIndex: '998', color: 'red'}}><HiXMark/></ButtonX>

                {imageDisplay &&
                    <ButtonTakePhoto style={{zIndex: '999'}} onClick={resetImage}>Take new photo</ButtonTakePhoto>}

                {imageDisplay &&
                    <ButtonUsePhoto style={{zIndex: '999'}} onClick={handleUsePhoto}>Use photo </ButtonUsePhoto>}
                <div style={{width: imageDisplay ? '100%' : '', height: imageDisplay ? '100%' : ''}}>
                    {cloneElement(children, {
                        onCloseModal: close,
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