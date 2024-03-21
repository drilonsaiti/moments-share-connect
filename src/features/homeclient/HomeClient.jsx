import React from 'react';
import styled from "styled-components";
import HomeAdminLayout from "../homeadmin/HomeAdminLayout.jsx";
import NavigationBar from "../../ui/NavigationBar.jsx";
import Header from "../../ui/Header.jsx";
import HomeClientLayout from "./HomeClientLayout.jsx";

const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 2rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media only screen and (min-width: 900px) {
        align-items: normal;
        height: 95vh;
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`
const HomeClient = () => {
    return (
            <StyledHome>
                <Header/>

                <HomeClientLayout/>
                <NavigationBar/>
            </StyledHome>

    );
};

export default HomeClient;