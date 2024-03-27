import Modal from "../../ui/Modal.jsx";
import Button from "../../ui/Button.jsx";
import CreateUserForm from "../authentication/CreateUserForm.jsx";
import React from "react";
import CreateBucketForm from "./CreateBucketForm.jsx";

const AddBucket = () => {
    return (
        <Modal>
            <Modal.Open opens="add-bucket">
                <Button size="medium" variation={'secondary'} style={{
                    fontSize: '2.5rem', padding: '.5rem 6.6rem', width: '70%',
                    alignSelf: 'center'
                }}> Add new bucket </Button>
            </Modal.Open>
            <Modal.Window name="add-bucket">
                <CreateBucketForm />
            </Modal.Window>
        </Modal>
    );
};

export default AddBucket;