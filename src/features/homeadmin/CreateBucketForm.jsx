import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import Button from "../../ui/Button.jsx";
import {useForm} from "react-hook-form";
import {useCreateBucket} from "./useCreateBucket.js";
import {useEditBucket} from "./useEditBucket.js";
import {useCreateStorageBucket} from "./useCreateStorageBucket.js";
import {useEditStorageBucket} from "./useEditStorageBucket.js";
import {useEffect, useState} from "react";
import {findByEmail} from "../../services/apiAuth.js";

function CreateCabinForm({bucketToEdit = {}, onCloseModal}) {

    const {isCreating, createBucket} = useCreateBucket();
    const {isCreating: isCreatingStorage, createStorageBucket} = useCreateStorageBucket();
    const {isEditing, editBucket} = useEditBucket();
    const {isEditing: isEditingStorageBucket,editStorageBucket} = useEditStorageBucket()
    const isWorking = isCreating || isEditing;
    const {id: editId, ...editValues} = bucketToEdit;
    const isEditSession = Boolean(editId);
    const dateTimeLocalNow = new Date(new Date.getTime() - new Date().getTimezoneOffset() * 60_000)
        .toString().slice(0,16);

    const {register, handleSubmit, reset, getValues, formState,setValue} = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    const {errors} = formState;
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {


            if (email) {
                const data = await findByEmail(email);
                console.log(data);

                if (data) {
                    setValue('full_name', data.full_name);
                    setValue('contact_number', data.contact_number);
                    setValue('location', data.location);
                    setValue('date',data.date)
                }
            }
        };

        if (email) {
            fetchUserData();
        }
    }, [setEmail, email]);
    function onSubmit(data) {


        if (isEditSession){

            editBucket({...data,id:data.bucketId})


        }else{
            const date = new Date(data.date);
            const bucket_name = data.email + date.toISOString().slice(0, 10);
            const newData = {...data, bucket_name: bucket_name, image_urls: []}

            createBucket(
                {...newData}
            );
            createStorageBucket({bucket_name}, {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    },
                }
            )
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
            <FormRow label="Full name" error={errors?.location?.message}>
                <Input
                    type="text"
                    id="full_name"
                    disabled={isWorking}
                    {...register("full_name", {required: "This field is required"})}
                />
            </FormRow>

            <FormRow label="Email address" error={errors?.email?.message}>

                <Input
                    type="email"
                    id="email"
                    disabled={isWorking}
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please provide a valid email address",
                        },
                    })}
                />
            </FormRow>
            <FormRow label="Contact number" error={errors?.location?.message}>
                <Input
                    type="text"
                    id="contact_number"
                    disabled={isWorking}
                    {...register("contact_number",)}
                />
            </FormRow>

            <FormRow label="Location" error={errors?.location?.message}>
                <Input
                    type="text"
                    id="location"
                    disabled={isWorking}
                    {...register("location", {required: "This field is required"})}
                />
            </FormRow>

            <FormRow
                label="Start date"
                error={errors?.date?.message}
            >
                <Input
                    type="datetime-local"
                    id="date"
                    defaultValue={dateTimeLocalNow}
                    min={dateTimeLocalNow}
                    disabled={isWorking}
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
                    signup={true}

                    disabled={isWorking}
                >
                    Cancel
                </Button>
                <Button signup={true}
                        disabled={isWorking}>Create new bucket</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;