import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";
import styled from "styled-components";
import Footer from "../ui/Footer.jsx";
import AccessDenied from "../ui/AccessDenied.jsx";
import {useCurrentUser} from "../features/authentication/useCurrentUser.js";
import SpinnerMini from "../ui/SpinnerMini.jsx";
import React from "react";

const Layout = styled.main`
    position: relative;
    min-height: 100lvh;
    display: grid;
    grid-template-columns: 48rem;
    /*align-content: center;*/
    justify-content: center;
    gap: 3.2rem;
    padding: 4rem;
    background-color: var(--color-grey-50);
    @media only screen and (min-width: 900px) {
        display: inherit;
    }
    @media only screen and (max-width: 450px) {
        grid-template-columns: 40rem;
        gap: 0;
    }
`;

function Dashboard() {
    const {data, isLoading: isLoadingUser} = useCurrentUser();

    if (isLoadingUser) return <SpinnerMini/>;

    const isAdmin = data.email.includes(import.meta.env.VITE_EMAIL_ADMIN);

    return (
        <>
            {isAdmin ?
                <Layout>


                    <DashboardLayout/>
                    <Footer/>

                </Layout>
                : <AccessDenied/>}
        </>
    );
}

export default Dashboard;