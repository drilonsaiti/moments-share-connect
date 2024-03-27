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

            <FormRow label="Location" error={errors?.location?.message}>
                <Input
                    type="text"
                    id="location"
                    {...register("location", { required: "This field is required" })}
                />
            </FormRow>

            <FormRow
                label="Start date"
                error={errors?.date?.message}
            >
                <Input
                    type="date"
                    id="date"
                    {...register("date", {
                        required: "This field is required",
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
                <Button >Create new bucket</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;