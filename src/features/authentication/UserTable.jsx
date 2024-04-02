import Spinner from "../../ui/Spinner";
import UserRow from "./UserRow";
import Empty from "../../ui/Empty.jsx";
import Menus from "../../ui/Menus.jsx";
import Table from "../../ui/Table.jsx";
import {useUsers} from "./useUsers.js";
import Cards from "../../ui/Cards.jsx";
import Card from "../../ui/Card.jsx";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Heading from "../../ui/Heading.jsx";
import Modal from "../../ui/Modal.jsx";
import {HiMail, HiPencil, HiTrash} from "react-icons/hi";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import React, {useEffect, useState} from "react";
import {useDeleteUser} from "./useDeleteUser.js";
import styled from "styled-components";
import CreateUserForm from "./CreateUserForm.jsx";
import Icon from "../../ui/Icon.jsx";
import {HiPhone} from "react-icons/hi2";
import Separator from "../../ui/Seperator.jsx";

const Header = styled.div`

    display: flex;
    flex-direction: column;
`;

const ActionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`
const UserTable = () => {
    const {isLoading, users} = useUsers();
    const {isDeleting, deleteUser} = useDeleteUser();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isLoading) return <Spinner/>;
    if (!users.length) return <Empty resourceName="users"/>;


    return (
        <>
            {screenWidth > 900 ? <Menus>
                <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr">
                    <Table.Header>
                        <div></div>
                        <div>Email</div>
                        <div>Full name</div>
                        <div>Contact number</div>
                        <div></div>
                    </Table.Header>

                    <Table.Body
                        // data={users}
                        // data={filteredUsers}
                        data={users}
                        render={(user) => <UserRow user={user} key={user.id}/>}
                    />
                </Table>
            </Menus> : <Cards>
                {users.map(user => (
                    <Card key={user.email}>

                        <Header>
                            <Heading type="h4" subheading style={{alignSelf: 'start'}}>
                                #{user.id}
                            </Heading>
                            <FlexGroup type="row" style={{justifyContent: 'space-between'}}>
                                <Heading type="h1">
                                    {user.fullName}
                                </Heading>
                                <Menus>
                                    <Modal>

                                        <Menus.Menu>
                                            <Menus.Toggle id={user.id}/>

                                            <Menus.List id={user.id}>


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
                                                    resourceName="user"
                                                    disabled={isDeleting}
                                                    onConfirm={() => deleteUser(user.email)}
                                                />
                                            </Modal.Window>
                                        </Menus.Menu>
                                    </Modal>
                                </Menus>

                            </FlexGroup>
                        </Header>
                        <FlexGroup>

                            <FlexGroup type="row" contact>
                                <FlexGroup type="row">
                                    <Icon>
                                        <HiPhone/>
                                    </Icon>
                                    <Heading type="h4" subheading>
                                        <ActionLink href={`href:${user.contactNumber}`}>
                                            {user.contactNumber}
                                        </ActionLink>
                                    </Heading>
                                </FlexGroup>
                                <Separator vertical/>
                                <FlexGroup type="row">
                                    <Icon>
                                        <HiMail/>
                                    </Icon>
                                    <Heading type="h4" subheading>
                                        <ActionLink href={`mailto:${user.email}`}>
                                            {user.email}
                                        </ActionLink>

                                    </Heading>
                                </FlexGroup>
                            </FlexGroup>

                        </FlexGroup>

                    </Card>
                ))}
            </Cards>
            }
        </>
    );
}

export default UserTable;