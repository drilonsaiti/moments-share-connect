import React from 'react';
import styled, {keyframes} from "styled-components";
import {NavLink} from "react-router-dom";
import {HiChartBar, HiHome, HiUser, HiUsers} from "react-icons/hi2";

const NavigationLayout = styled.div`
    position: fixed;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(79, 70, 229, 0.3);
    padding: 1rem 2rem;

    @media only screen and (min-width: 900px) {
        display: none;
    }
    @media only screen and (max-width: 900px) {
        display: block;
    }

`;

const NavigationItems = styled.div`
    display: flex;
    gap: 1rem;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        color: var(--color-grey-900);
        font-size: 1.6rem;
        font-weight: 500;
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);

    }

    & svg {
        width: 2.1rem;
        height: 2.1rem;
        color: var(--color-grey-900);
        transition: all 0.3s;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-brand-800);
    }

    & p {
        display: none;
        animation: ${fadeIn} 0.3s ease-in-out forwards;
    }

    &.active:link p,
    &.active:visited p {
        display: block;
    }

`;

const NavigationBar = () => {
    return (
        <NavigationLayout>
            <NavigationItems>
                <StyledNavLink to="home">
                    <HiHome/>
                    <p className="name">home</p>
                </StyledNavLink>
                <StyledNavLink to="dashboard">
                    <HiChartBar/>
                    <p className="name">dashboard</p>
                </StyledNavLink>
                <StyledNavLink to="clients">
                    <HiUsers/>
                    <p className="name">users</p>
                </StyledNavLink>
                <StyledNavLink to="profile">
                    <HiUser/>
                    <p className="name">profile</p>
                </StyledNavLink>
            </NavigationItems>
        </NavigationLayout>
    );
};

export default NavigationBar;
