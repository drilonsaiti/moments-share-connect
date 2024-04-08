import HomeUser from "../features/homeuser/HomeUser.jsx";
import styled from "styled-components";
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
    @media only screen and (max-width: 450px) {
        grid-template-columns: 40rem;
        min-height: 100dvh;
        gap: 0;
    }
`;


const TakePhoto = ({browser}) => {
    return (
        <Layout>
            <HomeUser browser={browser}/>
            <Footer/>
        </Layout>
    );
};

export default TakePhoto;