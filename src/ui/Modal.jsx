import styled from "styled-components";
import {HiXMark} from "react-icons/hi2";
import {createPortal} from "react-dom";
import {cloneElement, createContext, useCallback, useContext, useMemo, useState} from "react";
import {useOutsideClick} from "../hooks/useOutsideClick.js";

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
    overflow-y: ${({ overFlowVisible }) => (overFlowVisible ? 'visible' : 'auto')};`;

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

const Button = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    bottom: 7rem;
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

const ModalContext = createContext();

const Modal = ({children,overFlowVisibile}) => {
    const [openName, setOpenName] = useState('');

    const close = useCallback(() => setOpenName(''), []);
    const open = setOpenName;
    const contextValue = useMemo(() => ({openName, close, open}), [openName, close, open]);

    return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}


const Open = ({children, opens: opensWindowName}) => {
    const {open} = useContext(ModalContext);
    return cloneElement(children, {onClick: () => open(opensWindowName)});
}


const Window = ({ children, name, overFlowVisible }) => {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick(close);

    const handleTakePhotoAnimationDone = useCallback(() => {
        close(); // Close the modal when the animation is done
    }, [close]);

    if (name !== openName) return null;
    const handleAnimationEnd = () => {
        if (name === openName) {
            close(); // Close the modal after the animation ends
        }
    };
    const fadeOutStyles = {
        opacity: openName === name ? 1 : 0,
        transition: 'opacity 0.3s ease-out' // Adjust timing and easing as needed
    };
    return createPortal(
        <Overlay>
            <StyledModal ref={ref} onClick={(e) => e.stopPropagation()}
                         style={fadeOutStyles} // Apply inline styles for fade-out animation
                         onAnimationEnd={handleAnimationEnd}
                         overFlowVisible={overFlowVisible}>
                <Button style={{zIndex: '999'}} onClick={close}>Cancel</Button>
                <div>
                    {cloneElement(children, { onCloseModal: close, onTakePhotoAnimationDone: handleTakePhotoAnimationDone })}                </div>
            </StyledModal>
        </Overlay>,
        document.body
    );
};


Modal.Open = Open;
Modal.Window = Window;

export default Modal;