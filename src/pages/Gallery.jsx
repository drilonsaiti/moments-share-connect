import {GridIcon, Grids,} from "../ui/GridIcon.jsx";
import styled from "styled-components";
import FlexGroup from "../ui/FlexGroup.jsx";
import Seperator from "../ui/Seperator.jsx";
import Heading from "../ui/Heading.jsx";
import React, {useState} from "react";
import ButtonIconSocial from "../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";
import Footer from "../ui/Footer.jsx";
import GalleryLayout from "../features/gallery/GalleryLayout.jsx";
import Button from "../ui/Button.jsx";
import {HiCheck} from "react-icons/hi2";
import {HiDownload} from "react-icons/hi";
import {downloadImages} from "../utils/useDownloadImages.js";
import Header from "../ui/Header.jsx";
import Icon from "../ui/Icon.jsx";

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
const Contact = styled.a`
    display: flex;
    text-align: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
    gap: 1rem;
    cursor: pointer;

`

const Gallery = () => {

    const [selectGrid, setSelectGrid] = useState();
    const [selectButton, setSelectButton] = useState();
    const [checkedAll, setCheckedAll] = useState(false);
    const [selectedImages, setSelectedImages] = useState([])
    const [selectedImageLength, setSelectedImageLength] = useState(0);

    const handleSelectGrid = (gridNum) => {
        setSelectGrid(gridNum)
    }
    const updateSelectedImagesLength = (length) => {

        setSelectedImages(length);
        setSelectedImageLength(length.length)
    };

    const handleDownloadSelected = () => {
        if (selectedImages.length === 0) {
            return;
        }
        downloadImages(selectedImages);

    };

    const handleCancel = () => {
        setSelectButton(!selectButton);
        if (selectedImages.length !== 0) {
            window.location.reload();
        }

    }
    const handleSelect = () => {
        setSelectButton(!selectButton);
    }
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    return (
        <Layout>
            <StyledHome>
                <Header/>
                <FlexGroup type="row" style={{justifyContent: 'center'}}>
                    <FlexGroup style={{gap: 0, alignItems: 'center'}}>
                        <FlexGroup type="row" changeDirection>
                            <Heading style={{alignSelf: 'center', textAlign: 'center'}}>Sema Event</Heading>
                            <ButtonIconSocial type="icon">
                                <FaInstagram/>
                            </ButtonIconSocial>
                        </FlexGroup>

                        <Contact href="https://www.instagram.com/sema.event/">
                            <Icon>
                                <FaInstagram/>
                            </Icon>
                            <p style={{textDecoration: 'underline', marginBottom: '3px'}}>
                                sema.event
                            </p>
                        </Contact>

                    </FlexGroup>

                </FlexGroup>
                <Seperator style={{marginTop: '-20px'}}/>
                <FlexGroup type="row"
                           style={{justifyContent: `${isDesktop ? 'space-between' : 'flex-end'}`, width: '100%'}}>
                    {isDesktop && <FlexGroup>
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
                            {!selectButton ? <ActionLink style={{fontSize: '1.8rem'}} onClick={handleSelect}>
                                <p>Select</p>
                            </ActionLink> : <ActionLink style={{fontSize: '1.8rem'}} onClick={handleCancel}>
                                <p>Cancel</p>
                            </ActionLink>}


                        </FlexGroup>

                        {selectButton && <Button size="small" smallButton onClick={handleDownloadSelected}>
                            <FlexGroup type="row" style={{justifyContent: 'center', gap: '.2rem'}}>
                                <HiDownload/>
                                <FlexGroup type="row" style={{gap: 0}}>
                                    <p>Download</p>
                                    <p>{`(${selectedImageLength})`}</p>
                                </FlexGroup>
                            </FlexGroup>
                        </Button>}
                    </FlexGroup>}
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