import styled from "styled-components";
import Heading from "../ui/Heading.jsx";
import LoginForm from "../features/authentication/LoginForm.jsx";
import Footer from "../ui/Footer.jsx";
import Logo from "../ui/Logo.jsx";


const LoginLayout = styled.main`
    min-height: 100lvh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function Login() {
    return <LoginLayout>
        <Logo/>
        <Heading type="login">SemaDaka Events</Heading>
        <Heading type="h2" style={{textAlign: 'center'}}>Log in to your account</Heading>
        <LoginForm/>
        <Footer/>
    </LoginLayout>;
}

export default Login;
