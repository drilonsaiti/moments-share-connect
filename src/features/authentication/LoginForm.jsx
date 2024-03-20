import {useState} from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
const Card = styled.div`
    background-color: var(--color-grey-0);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin-bottom: 1.5rem;
    width: 100%;
    cursor: pointer;
    text-align: center;

    p {
        color: var(--color-grey-1000);
        line-height: 1.6;
        width: 100%;
    }

    &:hover {
        outline: 2px solid var(--color-brand-700);
    }
`;

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /*/!*const {register,formState,getValues,reset,handleSubmit} = useForm();
    const {errors} = formState;*!/
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

    const handleLogin = (email,password) => {
        const data = {
            email: email,
            password: password
        }
        login(data)
    }*/

    return (<>

            <Form /*onSubmit={handleSubmit}*/>
                <FormRow label="Email address" orientation="vertical">
                    <Input
                        type="email"
                        id="email"
                        autoComplete="username"
                        value={email}
                        /*disabled={isLoading}*/
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormRow>
                <FormRow label="Password" orientation="vertical">
                    <Input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        /* disabled={isLoading}*/
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </FormRow>
                <FormRow orientation="vertical">
                    <Button /*disabled={isLoading}*/ size="large">{/*{!isLoading ? "Log in" : <SpinnerMini/>}*/}Log
                        in</Button>
                </FormRow>
                {/* <p style={{textAlign: "center", marginTop: "2rem"}}>No account? <p
                style={{color: "var(--color-brand-600)", fontSize: "2rem"}} >Sign up</p></p>*/}


            </Form>
        </>
    );
}

export default LoginForm;
