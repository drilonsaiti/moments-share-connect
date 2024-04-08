import styled from "styled-components";
import Heading from "../ui/Heading.jsx";
import LoginForm from "../features/authentication/LoginForm.jsx";
import Footer from "../ui/Footer.jsx";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";
import {FaInstagram} from "react-icons/fa6";

const LoginLayout = styled.main`
    min-height: 100lvh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);

    @media only screen and (max-width: 470px) {
        grid-template-columns: 40rem;
    }
`;

const Contact = styled.a`
    display: flex;
    text-align: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
    gap: 1rem;
    cursor: pointer;

`

function Login() {
    return <LoginLayout>
        <Logo/>
        <Heading type="login">Sema Events</Heading>
        <Heading type="h2" style={{textAlign: 'center'}}>Log in to your account</Heading>
        <LoginForm/>
        <Contact href="https://www.instagram.com/sema.event/">
            <Icon>
                <FaInstagram/>
            </Icon>
            <p style={{textDecoration: 'underline', marginBottom: '3px'}}>
                sema.event
            </p>
        </Contact>
        <Footer/>
    </LoginLayout>;
}

export default Login;
