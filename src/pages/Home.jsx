import React from 'react';
import styled from "styled-components";
import HomeAdmin from "../features/homeadmin/HomeAdmin.jsx";
import HomeClient from "../features/homeclient/HomeClient.jsx";
import Footer from "../ui/Footer.jsx";
import SpinnerMini from "../ui/SpinnerMini.jsx";
import {useUser} from "../features/authentication/useUser.js";

const Layout = styled.div`
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

const Home = () => {
    const {data, isLoading: isLoadingUser} = useUser();

    if (isLoadingUser) return <SpinnerMini/>;

    const isAdmin = data?.email.includes(import.meta.env.VITE_EMAIL_ADMIN);
    return (
        <Layout>

            {isAdmin ? <HomeAdmin/> : <HomeClient/>}
            <Footer/>
        </Layout>
    );
};

export default Home;