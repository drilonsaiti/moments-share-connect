import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {HiCheck} from "react-icons/hi2";

const CheckboxContainer = styled.label`
    position: absolute;
    top: 3%;
    left: 3%;
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
`;

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const StyledCheckbox = styled.div`
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({isChecked}) => (isChecked ? 'var(--color-brand-700)' : 'white')}; 
    border: 1px solid var(--color-brand-700);
    box-shadow: var(--shadow-md);
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 2rem;
        height: 2rem;
        fill: var(--color-grey-700);
    }
`;

const InputCheckbox = ({onClick,checkedAll}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (checkedAll){
            setIsChecked(true);
        }else{
            setIsChecked(false)
        }
    }, [checkedAll]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (onClick) {
            onClick();
        }
    };

    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={isChecked} onClick={handleCheckboxChange}/>
            <StyledCheckbox isChecked={isChecked}>
                {isChecked && <HiCheck/> }
            </StyledCheckbox>
        </CheckboxContainer>
    );
};

export default InputCheckbox;
