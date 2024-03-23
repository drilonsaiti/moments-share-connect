import FlexGroup from "./FlexGroup.jsx";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {HiArrowRightOnRectangle, HiUser} from "react-icons/hi2";
import Seperator from "./Seperator.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";


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
        @media only screen and (max-width: 450px) {
            gap: 0;
            padding: 1.2rem 1.4rem;
        }
    }

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
        <FlexGroup style={{gap: 0}}>
            <FlexGroup type="row" style={{alignSelf: 'center', justifyContent: 'center'}} header>
                <StyledNavLink replace to="home">
                    <p className="name">Home</p>
                </StyledNavLink>
                <StyledNavLink replace to="dashboard">

                    <p className="name">Dashboard</p>
                </StyledNavLink>
                <StyledNavLink replace to="clients">
                    <p className="name">Users</p>
                </StyledNavLink>
                <FlexGroup type="row" style={{gap: '2rem'}}>
                    <DarkModeToggle navBar={false}/>
                    <StyledNavLink replace to="profile" style={{alignSelf: 'center', padding: 0}}>
                        <HiUser/>
                    </StyledNavLink>
                    <StyledNavLink replace to="profile" style={{alignSelf: 'center', padding: 0}}>
                        <HiArrowRightOnRectangle/>
                    </StyledNavLink>
                </FlexGroup>

            </FlexGroup>
            <Seperator secondary/>
        </FlexGroup>
    );
};

export default Header;