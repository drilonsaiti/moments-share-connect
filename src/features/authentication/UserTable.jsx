import Spinner from "../../ui/Spinner";
import UserRow from "./UserRow";
import Empty from "../../ui/Empty.jsx";
import Menus from "../../ui/Menus.jsx";
import Table from "../../ui/Table.jsx";
import {useUsers} from "./useUsers.js";


function UserTable() {
    const {isLoading, users} = useUsers();

    if (isLoading) return <Spinner/>;
    if (!users.length) return <Empty resourceName="users"/>;


    return (
        <Menus>
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
        </Menus>
    );
}

export default UserTable;