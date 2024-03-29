import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import Button from "../../ui/Button.jsx";
import { useForm } from "react-hook-form";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {


    const { register, handleSubmit, reset, getValues, formState } = useForm({
    });
    const { errors } = formState;

    function onSubmit(data) {

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
                    {...register("fullName", { required: "This field is required" })}
                />
            </FormRow>

            <FormRow label="Email address" error={errors?.email?.message}>
                <Input
                    type="email"
                    id="email"
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
                >
                    Cancel
                </Button>
                <Button >Create new user</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;