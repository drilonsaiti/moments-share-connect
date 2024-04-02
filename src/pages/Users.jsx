import styled from "styled-components";
import Footer from "../ui/Footer.jsx";
import UsersLayout from "../features/authentication/UsersLayout.jsx";
import {useCurrentUser} from "../features/authentication/useCurrentUser.js";
import SpinnerMini from "../ui/SpinnerMini.jsx";
import AccessDenied from "../ui/AccessDenied.jsx";

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
const Users = () => {
    const {data, isLoading: isLoadingUser} = useCurrentUser();

    if (isLoadingUser) return <SpinnerMini/>;

    const isAdmin = data.email.includes(import.meta.env.VITE_EMAIL_ADMIN);
    return (
        <>
            {isAdmin ? <Layout>
                <UsersLayout/>
                <Footer/>
            </Layout> : <AccessDenied/>}
        </>

    );
};

export default Users;