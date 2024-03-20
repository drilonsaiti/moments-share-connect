import FlexGroup from "./FlexGroup.jsx";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {HiUser} from "react-icons/hi2";

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
        @media only screen and (max-width: 430px) {
            gap: 0;
            padding: 1.2rem 1.4rem;
        }
    }

    /* This works because react-router places the active class on the active NavLink */

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-brand-700);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 2rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }

`;
const Header = () => {
    return (
        <FlexGroup type="row" style={{alignSelf: 'center'}} header>
            <StyledNavLink to="home">
                <p className="name">Home</p>
            </StyledNavLink>
            <StyledNavLink to="dashboard">

                <p className="name">Dashboard</p>
            </StyledNavLink>
            <StyledNavLink to="clients">
                <p className="name">Users</p>
            </StyledNavLink>
            <StyledNavLink to="profile" style={{alignSelf: 'center'}}>

                <HiUser/>

            </StyledNavLink>
        </FlexGroup>
    );
};

export default Header;