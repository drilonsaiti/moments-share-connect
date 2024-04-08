import {useState} from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import {useQueryClient} from "@tanstack/react-query";
import {useLogin} from "./useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import {HiEye} from "react-icons/hi2";
import styled from "styled-components";
import Icon from "../../ui/Icon.jsx";
import {HiEyeOff} from "react-icons/hi";


const PasswordContainer = styled.div`
    position: relative;
    width: 100%;
    
`

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassowrd] = useState(false);
    const {login, isLoading, data} = useLogin();
    const queryClient = useQueryClient();

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        login(data, {
            onSettled: () => {
                setEmail('')
                setPassword('')
            }
        })

    }

    const handleShowPassowrd = () => {
        setShowPassowrd(!showPassword);
    }

    return (<>

            <Form onSubmit={handleSubmit}>
                <FormRow label="Email address" orientation="vertical">
                    <Input
                        type="email"
                        id="email"
                        autoComplete="username"
                        value={email}
                        disabled={isLoading}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormRow>
                <FormRow label="Password" orientation="vertical">
                    <PasswordContainer>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            disabled={isLoading}
                            value={password}
                            style={{width: '100%'}}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <Icon eyeIcon onClick={handleShowPassowrd}>
                            {showPassword ? <HiEye/> : <HiEyeOff/>}
                        </Icon>
                    </PasswordContainer>
                </FormRow>
                <FormRow orientation="vertical">
                    <Button disabled={isLoading || !email || !password} size="large">{!isLoading ? "Log in" :
                        <SpinnerMini/>}</Button>
                </FormRow>
                {/* <p style={{textAlign: "center", marginTop: "2rem"}}>No account? <p
                style={{color: "var(--color-brand-600)", fontSize: "2rem"}} >Sign up</p></p>*/}


            </Form>
        </>
    );
}

export default LoginForm;
