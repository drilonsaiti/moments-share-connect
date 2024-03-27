import React from 'react';
import styled from "styled-components";
import HomeAdmin from "../features/homeadmin/HomeAdmin.jsx";
import HomeClient from "../features/homeclient/HomeClient.jsx";
import Footer from "../ui/Footer.jsx";

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
    @media only screen and (max-width: 450px) {
        grid-template-columns: 40rem;
        gap: 0;
    }
`;

const HomeClientPage = () => {
    const isAdmin = true;
    return (
        <Layout>
            <HomeClient/>
            <Footer/>
        </Layout>
    );
};

export default HomeClientPage;