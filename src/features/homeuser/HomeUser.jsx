import styled from "styled-components";
import Paragraph from "../../ui/Paragraph.jsx";
import Seperator from "../../ui/Seperator.jsx";
import Heading from "../../ui/Heading.jsx";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Button from "../../ui/Button.jsx";
import Footer from "../../ui/Footer.jsx";
import DarkModeToggle from "../../ui/DarkModeToggle.jsx";
import React from "react";
import ButtonIconSocial from "../../ui/ButtonIconSocial.jsx";
import {FaInstagram} from "react-icons/fa6";

const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 2rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    height: 100vh;

    @media only screen and (min-width: 900px) {
        align-items: normal;
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`

const ButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const FooterContainer = styled.div`
    position: absolute;
    bottom: 3%;
    align-self: center;

    @media only screen and (max-width: 900px) {
        margin-bottom: 2rem;
    }
`

const ActionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`
const HomeUser = () => {
    return (
        <StyledHome>
            <FlexGroup type="row" style={{justifyContent: 'center'}}>
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
            <Seperator/>
            <FlexGroup style={{alignSelf: 'center', marginTop: '2rem'}}>
                <Heading type="h3" style={{alignSelf: 'center', textAlign: 'center'}}>
                    📸 From the Event: Share Your Love Through Photos!
                </Heading>
                <Paragraph>
                    Capture the magic of our day with your lens, and your snapshots will forever be cherished in our
                    hearts. Thank you for being part of our story!
                </Paragraph>
            </FlexGroup>
            <ButtonContainer>
                <Button size="large" style={{alignSelf: 'center'}}>
                    Take a photo
                </Button>
            </ButtonContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </StyledHome>

    );
};

export default HomeUser;