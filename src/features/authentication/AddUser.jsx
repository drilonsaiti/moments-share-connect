import React from 'react';
import Button from "../../ui/Button.jsx";
import CreateUserForm from "./CreateUserForm.jsx";
import Modal from "../../ui/Modal.jsx";

const AddUser = () => {
    return (
        <Modal>
            <Modal.Open opens="add-user">
                <Button size="medium" style={{
                    fontSize: '2.5rem', padding: '.5rem 6.6rem', width: '70%',
                    alignSelf: 'center'
                }}> Add new user </Button>
            </Modal.Open>
            <Modal.Window name="add-user">
                <CreateUserForm />
            </Modal.Window>
        </Modal>
    );
};

export default AddUser;