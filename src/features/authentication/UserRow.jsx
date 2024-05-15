import styled from "styled-components";

import CreateUserForm from "./CreateUserForm";
import {useDeleteUser} from "./useDeleteUser";
import {HiPencil, HiTrash} from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";


const User = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

function UserRow({user, index}) {
    const {isDeleting, deleteUser} = useDeleteUser();

    const {
        id: userId,
        email,
        fullName,
        contactNumber
    } = user;


    return (
        <Table.Row>
            <div>#{index}</div>
            <User>{email}</User>
            <User>{fullName}</User>
            <User>{contactNumber}</User>
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={userId}/>

                        <Menus.List id={userId}>
                            <Modal.Open opens="edit">
                                <Menus.Button icon={<HiPencil/>}>Edit</Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="delete">
                                <Menus.Button icon={<HiTrash/>}>Delete</Menus.Button>
                            </Modal.Open>
                        </Menus.List>

                        <Modal.Window name="edit">
                            <CreateUserForm userToEdit={user}/>
                        </Modal.Window>

                        <Modal.Window name="delete">
                            <ConfirmDelete
                                resourceName="users"
                                disabled={isDeleting}
                                onConfirm={() => deleteUser(email)}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}

export default UserRow;