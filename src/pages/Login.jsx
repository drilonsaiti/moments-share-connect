import styled from "styled-components";
import Heading from "../ui/Heading.jsx";
import LoginForm from "../features/authentication/LoginForm.jsx";


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
        <Heading type="login">Log in to your account</Heading>
        <LoginForm/>
    </LoginLayout>;
}

export default Login;
