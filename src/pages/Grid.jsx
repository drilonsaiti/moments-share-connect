import {GridIcon, Grids,} from "../ui/GridIcon.jsx";
import styled from "styled-components";
import FlexGroup from "../ui/FlexGroup.jsx";
import Seperator from "../ui/Seperator.jsx";
import Heading from "../ui/Heading.jsx";
import DarkModeToggle from "../ui/DarkModeToggle.jsx";
import React from "react";
import ButtonIconSocial from "../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";
import Footer from "../ui/Footer.jsx";
import GalleryLayout from "../features/gallery/GalleryLayout.jsx";

const Layout = styled.main`
    position: relative;
    min-height: 100lvh;
    display: grid;
    grid-template-columns: 48rem;
    /*align-content: center;*/
    justify-content: center;
    background-color: var(--color-grey-50);
    @media only screen and (max-width: 450px) {
        grid-template-columns: 40rem;
    }
`;
const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 2rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 0 auto;

    @media only screen and (min-width: 900px) {
        align-items: normal;
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`

const ActionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`
const Grid = () => {
    return (
        <Layout>
            <StyledHome>
                <FlexGroup type="row">
                    <FlexGroup style={{gap: 0, alignItems: 'center'}}>
                        <FlexGroup type="row">
                            <Heading style={{alignSelf: 'center', textAlign: 'center'}}>SemaDaka Events</Heading>
                            <ButtonIconSocial type="icon">
                                <FaInstagram/>
                            </ButtonIconSocial>
                        </FlexGroup>

                        <Heading type="h4" subheading>
                            <ActionLink href="tel:+38970000000">
                                +38970000000
                            </ActionLink>
                        </Heading>

                    </FlexGroup>
                    <DarkModeToggle absolute/>

                </FlexGroup>
                <Seperator style={{marginTop: '-20px'}}/>
                <FlexGroup type="row" style={{justifyContent: 'space-between', width: '100%'}}>
                    <ActionLink>
                        <p>Select</p>
                    </ActionLink>
                    <FlexGroup type="row" style={{gap: '1rem'}}>
                        <Grids columns={"1fr"}>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>
                        <Grids columns={"repeat(2,1fr)"}>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>
                        <Grids columns={"repeat(3,1fr)"}>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>

                        <Grids columns={"repeat(4,1fr)"}>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>
                    </FlexGroup>
                </FlexGroup>
                <GalleryLayout/>

            </StyledHome>

            <Footer/>
        </Layout>
    );
};

export default Grid;