import styled from "styled-components";
import Header from "../../ui/Header.jsx";
import UserTable from "./UserTable.jsx";
import React from "react";

const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 1rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media only screen and (min-width: 900px) {
        align-items: normal;
        
    }
    @media only screen and (max-width: 1050px) {
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`

const UsersLayout = () => {
    return (
        <StyledHome>
            <Header/>
            <UserTable/>
        </StyledHome>
    );
};

export default UsersLayout;