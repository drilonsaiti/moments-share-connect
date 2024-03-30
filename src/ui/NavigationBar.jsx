import React from 'react';
import styled, {keyframes} from "styled-components";
import {NavLink} from "react-router-dom";
import {HiArrowRightOnRectangle, HiChartBar, HiHome, HiUsers} from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle.jsx";
import {useCurrentUser} from "../features/authentication/useCurrentUser.js";
import SpinnerMini from "./SpinnerMini.jsx";
import {useLogout} from "../features/authentication/useLogout.js";
import ButtonIcon from "./ButtonIcon.jsx";

const NavigationLayout = styled.div`
    position: fixed;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-grey-0);
    width: 60%;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    padding: 1rem 2rem;

    @media only screen and (min-width: 900px) {
        display: none;
    }
    @media only screen and (max-width: 900px) {
        display: flex;
        width: 38%;
    }
    @media only screen and (max-width: 840px) {
        width: 40%;
    }
    @media only screen and (max-width: 800px) {
        width: 45%;
    }
    @media only screen and (max-width: 700px) {
        width: 50%;
    }
    @media only screen and (max-width: 640px) {
        width: 55%;
    }
    @media only screen and (max-width: 580px) {
        width: 60%;
    }
    @media only screen and (max-width: 535px) {
        width: 65%;
    }
    @media only screen and (max-width: 485px) {
        width: 70%;
    }
    @media only screen and (max-width: 450px) {
        width: 75%;
    }
    @media only screen and (max-width: 425px) {
        width: 80%;
    }
    @media only screen and (max-width: 400px) {
        width: 85%;
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
    const {logout, isLoading} = useLogout();
    const {data, isLoading: isLoadingUser} = useCurrentUser();

    if (isLoadingUser) return <SpinnerMini/>;

    const isAdmin = data.email.includes(import.meta.env.VITE_EMAIL_ADMIN);

    return (
        <NavigationLayout>
            <NavigationItems>
                <StyledNavLink replace to="home">
                    <HiHome/>
                    <p className="name">home</p>
                </StyledNavLink>
                {isAdmin && <StyledNavLink replace to="dashboard">
                    <HiChartBar/>
                    <p className="name">dashboard</p>
                </StyledNavLink>}
                {isAdmin && <StyledNavLink replace to="users">
                    <HiUsers/>
                    <p className="name">users</p>
                </StyledNavLink>}
                {/*<StyledNavLink replace to="profile">
                    <HiUser/>
                    <p className="name">profile</p>
                </StyledNavLink>*/}
                <ButtonIcon disabled={isLoading} onClick={logout}>
                    {!isLoading ? <HiArrowRightOnRectangle/> : <SpinnerMini/>}
                </ButtonIcon>
                <DarkModeToggle navBar={true}/>

            </NavigationItems>
        </NavigationLayout>
    );
};

export default NavigationBar;
