import React from 'react';
import styled from "styled-components";
import HomeAdminLayout from "./HomeAdminLayout.jsx";
import NavigationBar from "../../ui/NavigationBar.jsx";
import Header from "../../ui/Header.jsx";


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
    return (

        <StyledHome>
            <Header/>
            <HomeAdminLayout/>
            <NavigationBar/>
        </StyledHome>

    );
};

export default HomeAdmin;