import React from 'react';
import styled from "styled-components";
import HomeAdminLayout from "../features/homeadmin/HomeAdminLayout.jsx";
import NavigationBar from "../ui/NavigationBar.jsx";
import Header from "../ui/Header.jsx";

const Layout = styled.main`
    position: relative;
    min-height: 100lvh;
    display: grid;
    grid-template-columns: 48rem;
    /*align-content: center;*/
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
    @media only screen and (min-width: 900px) {
        display: inherit;
    }
    @media only screen and (max-width: 430px) {
        grid-template-columns: 35rem;
    }
`;

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
        height: 100vh;
    }
    @media only screen and (max-width: 430px) {
        padding: 2rem 2rem;
    }
`
const HomeAdmin = () => {
    return (
        <Layout>
            <StyledHome>
                <Header/>
                <HomeAdminLayout/>
                <NavigationBar/>
            </StyledHome>

        </Layout>
    );
};

export default HomeAdmin;