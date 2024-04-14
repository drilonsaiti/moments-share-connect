import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import Button from "../../ui/Button.jsx";
import {useForm} from "react-hook-form";
import {useSignup} from "./useSignUp.js";
import {useCreateUser} from "./useCreateUser.js";
import {useEditUser} from "./useEditUser.js";

function CreateCabinForm({userToEdit = {}, onCloseModal}) {

    const {signup, isLoading} = useSignup();
    const {createUser, isLoading: loadingCreateUser} = useCreateUser();
    const {editUser, isUpdating} = useEditUser();
    const {id, ...editValues} = userToEdit;
    const isEditSession = Boolean(id);
    const {register, handleSubmit, reset, getValues, formState, setValue} = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    const {errors} = formState;
    const isWorking = loadingCreateUser || isUpdating;

    function onSubmit({fullName, email, password, contactNumber}) {
        if (isEditSession) {
            editUser({fullName, email, password, contactNumber},
                {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    }
                })
        } else {
            signup(
                {fullName, email, password, contactNumber},
                {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    },
                    onSettled: () => reset()
                }
            );

            createUser({fullName, email, contactNumber}, {
                onSuccess: (data) => {
                    reset();
                    onCloseModal?.();
                },
            })
        }

    }

    const onCancel = () => {
        reset();
        onCloseModal?.();
    }

    function onError(errors) {
        // console.log(errors);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Full name" error={errors?.fullName?.message}>
                <Input
                    type="text"
                    id="fullName"
                    disabled={isEditSession || isWorking}
                    {...register("fullName", {required: "This field is required"})}
                />
            </FormRow>
            <FormRow label="Contact number" error={errors?.fullName?.message}>
                <Input
                    type="text"
                    id="contactNumber"
                    disabled={isWorking}
                    {...register("contactNumber", {required: "This field is required"})}
                />
            </FormRow>

            <FormRow label="Email address" error={errors?.email?.message}>
                <Input
                    type="email"
                    id="email"
                    disabled={isWorking}
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please provide a valid email address",
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Password (min 8 characters)"
                error={errors?.password?.message}
            >
                <Input
                    type="password"
                    id="password"
                    disabled={isWorking}
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters",
                        },
                    })}
                />
            </FormRow>

            <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
                <Input
                    type="password"
                    id="passwordConfirm"
                    disabled={isWorking}
                    {...register("passwordConfirm", {
                        required: "This field is required",
                        validate: (value) =>
                            value === getValues().password || "Passwords need to match",
                    })}
                />
            </FormRow>


            <FormRow>
                <Button
                    variation="secondary"
                    type="reset"
                    onClick={onCancel}
                    signup={true}
                    disabled={isWorking}
                >
                    Cancel
                </Button>
                <Button signup={true} disabled={isWorking}
                >Create new user</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;