import {GridIcon, Grids,} from "../ui/GridIcon.jsx";
import styled from "styled-components";
import FlexGroup from "../ui/FlexGroup.jsx";
import Seperator from "../ui/Seperator.jsx";
import Heading from "../ui/Heading.jsx";
import DarkModeToggle from "../ui/DarkModeToggle.jsx";
import React, {useState} from "react";
import ButtonIconSocial from "../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";
import Footer from "../ui/Footer.jsx";
import GalleryLayout from "../features/gallery/GalleryLayout.jsx";
import Button from "../ui/Button.jsx";
import {HiCheck} from "react-icons/hi2";
import {HiDownload} from "react-icons/hi";
import {downloadImages} from "../utils/useDownloadImages.js";

const Layout = styled.main`
    position: relative;
    min-height: 100lvh;
    display: grid;
    grid-template-columns: 48rem;
    /*align-content: center;*/
    justify-content: center;
    background-color: var(--color-grey-50);
    @media only screen and (max-width: 450px) {
        grid-template-columns: 42rem;
    }
    @media only screen and (max-width: 400px) {
        grid-template-columns: 38rem;
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
const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

const CustomCheckbox = styled.div`
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--color-brand-700);
    border-radius: 0.25rem;
    background-color: ${({checked}) => (checked ? 'var(--color-brand-700)' : 'white')};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;


    svg {
        width: 2rem;
        height: 2rem;
        fill: var(--color-grey-700);
        visibility: ${({checked}) => (checked ? 'visible' : 'hidden')};
    }
`;

const Gallery = () => {

    const [selectGrid, setSelectGrid] = useState();
    const [selectButton, setSelectButton] = useState();
    const [checkedAll, setCheckedAll] = useState(false);
    const [selectedImages, setSelectedImages] = useState([])

    const handleSelectGrid = (gridNum) => {
        setSelectGrid(gridNum)
    }
    const updateSelectedImagesLength = (length) => {

        setSelectedImages(length);
    };

    const handleDownloadSelected = () => {
        if (selectedImages.length === 0) {
            return;
        }
        downloadImages(selectedImages);

    };

    return (
        <Layout>
            <StyledHome>
                <FlexGroup type="row" style={{justifyContent: 'center'}}>
                    <FlexGroup style={{gap: 0, alignItems: 'center'}}>
                        <FlexGroup type="row" changeDirection>
                            <Heading style={{alignSelf: 'center', textAlign: 'center'}}>Sema Event</Heading>
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
                    <FlexGroup>
                        <FlexGroup type="row">
                            {selectButton && (
                                <ActionLink style={{fontSize: '1.8rem'}}>
                                    <CheckboxContainer onClick={() => setCheckedAll(!checkedAll)}>
                                        <CustomCheckbox checked={selectedImages.length > 0 ? checkedAll : false}>
                                            <HiCheck/>
                                        </CustomCheckbox>
                                        <p>Select all</p>
                                    </CheckboxContainer>
                                </ActionLink>)}
                            <ActionLink style={{fontSize: '1.8rem'}} onClick={() => setSelectButton(!selectButton)}>
                                {!selectButton ? <p>Select</p> : <p>Cancel</p>}

                            </ActionLink>

                        </FlexGroup>
                        {selectButton && <Button size="small" smallButton onClick={handleDownloadSelected}>
                            <FlexGroup type="row" style={{justifyContent: 'center', gap: '.2rem'}}>
                                <HiDownload/> <p>{`Download selected (${selectedImages.length})`}</p>
                            </FlexGroup>
                        </Button>}
                    </FlexGroup>
                    <FlexGroup type="row" style={{gap: '1rem'}}>
                        <Grids columns={"1fr"} onClick={() => handleSelectGrid(1)}>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>
                        <Grids columns={"repeat(2,1fr)"} onClick={() => handleSelectGrid(2)}>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>
                        <Grids columns={"repeat(3,1fr)"} onClick={() => handleSelectGrid(3)}>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                            <GridIcon/>
                        </Grids>

                        <Grids columns={"repeat(4,1fr)"} onClick={() => handleSelectGrid(4)}>
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
                <GalleryLayout gridNum={selectGrid} select={selectButton} checkedAll={checkedAll}
                               setCheckedAll={setCheckedAll}
                               updateSelectedImagesLength={updateSelectedImagesLength}
                />

            </StyledHome>

            <Footer/>
        </Layout>
    );
};

export default Gallery;