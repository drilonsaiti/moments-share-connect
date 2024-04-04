import React from 'react';
import Paragraph from "./Paragraph.jsx";
import styled from "styled-components";


const FooterContainer = styled.div`
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    
`

const ActionLink = styled.a`
    text-decoration: underline;

    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-brand-600);
        font-size: 1.8rem;
        font-weight: 500;
        transition: all 0.3s;
        
    }
    

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-grey-800);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }
`
const Footer = () => {
    return (


        <Paragraph>
            Created by <ActionLink href="https://drilonsaiti.github.io">Drilon Saiti</ActionLink>
        </Paragraph>

    );
};

export default Footer;