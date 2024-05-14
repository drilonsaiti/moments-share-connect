import React from 'react';
import styled from "styled-components";
import HomeAdminLayout from "./HomeAdminLayout.jsx";
import NavigationBar from "../../ui/NavigationBar.jsx";
import Header from "../../ui/Header.jsx";
import {useCurrentUser} from "../authentication/useCurrentUser.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import AccessDenied from "../../ui/AccessDenied.jsx";
import {useUser} from "../authentication/useUser.js";


const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 1rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media only screen and (min-width: 900px) {
        align-items: normal;
    }
    @media only screen and (max-width: 1050px) {
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`
const HomeAdmin = () => {
    const {data, isLoading: isLoadingUser} = useUser();

    if (isLoadingUser) return <SpinnerMini/>;

    const isAdmin = data?.email.includes(import.meta.env.VITE_EMAIL_ADMIN);

    return (

        <StyledHome>
            {isAdmin ? <>
                <Header/>
                <HomeAdminLayout/>
                <NavigationBar/>
            </> : <AccessDenied/>}
        </StyledHome>

    );
};

export default HomeAdmin;