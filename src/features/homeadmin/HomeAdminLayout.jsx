import HomeAdminOperations from "./HomeAdminOperations.jsx";
import styled from "styled-components";
import Heading from "../../ui/Heading.jsx";
import {HiCalendarDays, HiPhone} from "react-icons/hi2";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Icon from "../../ui/Icon.jsx";
import {HiLocationMarker, HiMail} from "react-icons/hi";
import Separator from "../../ui/Seperator.jsx";
import Button from "../../ui/Button.jsx";
import React from "react";

const Card = styled.div`
    display: grid;
    gap: 2rem;
    text-align: center;
    background-color: var(--color-grey-0);
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s ease;
    border: 0.1px solid var(--border-color-50);

    &:hover {
        background: linear-gradient(to left top, rgba(16, 65, 47, .05) 0%, var(--hover-clinic-color) 50%, rgba(16, 65, 47, .1) 100%),
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))
    }

    @media only screen and (min-width: 900px) {
        justify-self: center;
    }
    @media only screen and (max-width: 500px) {
        padding: 1rem;
    }

    @media only screen and (max-width: 430px) {
        align-self: center;
        width: 110%;
    }
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ActionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`

const QR = styled.div`
    height: 50px;
    width: 50px;
    background-color: red;
`

const Cards = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media only screen and (min-width: 900px) {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    }
`


const HomeAdminLayout = () => {
    return (
        <>
            <Button sizes="large" style={{
                fontSize: '2.5rem', padding: '.5rem 8.6rem', width: '70%',
                alignSelf: 'center'
            }}> Add new user </Button>

            <HomeAdminOperations/>
            <Cards>
                <Card>
                    <Header>
                        <Heading type="h1">
                            John Smith
                        </Heading>
                    </Header>

                    <FlexGroup>

                        <FlexGroup type="row">
                            <Icon>
                                <HiCalendarDays/>
                            </Icon>
                            <Heading type="h4" subheading>
                                18.05.2024 14:00
                            </Heading>
                        </FlexGroup>
                        <FlexGroup type="row">
                            <Icon>
                                <HiLocationMarker/>
                            </Icon>
                            <Heading type="h4" subheading>
                                Test route,Test, Test 10
                            </Heading>
                        </FlexGroup>

                        <FlexGroup type="row" contact>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiPhone/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="tel:+38970000000">
                                        +38970000000
                                    </ActionLink>
                                </Heading>
                            </FlexGroup>
                            <Separator vertical/>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiMail/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="mailto:contact@gmail.com">
                                        contact@gmail.com
                                    </ActionLink>

                                </Heading>
                            </FlexGroup>
                        </FlexGroup>

                        <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>
                            <QR></QR>
                            <Button sizes="medium">
                                Download QR code
                            </Button>
                        </FlexGroup>

                    </FlexGroup>

                </Card>
                <Card>
                    <Header>
                        <Heading type="h1">
                            John Smith
                        </Heading>
                    </Header>

                    <FlexGroup>

                        <FlexGroup type="row">
                            <Icon>
                                <HiCalendarDays/>
                            </Icon>
                            <Heading type="h4" subheading>
                                18.05.2024 14:00
                            </Heading>
                        </FlexGroup>
                        <FlexGroup type="row">
                            <Icon>
                                <HiLocationMarker/>
                            </Icon>
                            <Heading type="h4" subheading>
                                Test route,Test, Test 10
                            </Heading>
                        </FlexGroup>

                        <FlexGroup type="row" contact>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiPhone/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="tel:+38970000000">
                                        +38970000000
                                    </ActionLink>
                                </Heading>
                            </FlexGroup>
                            <Separator vertical/>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiMail/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="mailto:contact@gmail.com">
                                        contact@gmail.com
                                    </ActionLink>

                                </Heading>
                            </FlexGroup>
                        </FlexGroup>

                        <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>
                            <QR></QR>
                            <Button sizes="medium">
                                Download QR code
                            </Button>
                        </FlexGroup>

                    </FlexGroup>

                </Card>

                <Card>
                    <Header>
                        <Heading type="h1">
                            John Smith
                        </Heading>
                    </Header>

                    <FlexGroup>

                        <FlexGroup type="row">
                            <Icon>
                                <HiCalendarDays/>
                            </Icon>
                            <Heading type="h4" subheading>
                                18.05.2024 14:00
                            </Heading>
                        </FlexGroup>
                        <FlexGroup type="row">
                            <Icon>
                                <HiLocationMarker/>
                            </Icon>
                            <Heading type="h4" subheading>
                                Test route,Test, Test 10
                            </Heading>
                        </FlexGroup>

                        <FlexGroup type="row" contact>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiPhone/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="tel:+38970000000">
                                        +38970000000
                                    </ActionLink>
                                </Heading>
                            </FlexGroup>
                            <Separator vertical/>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiMail/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="mailto:contact@gmail.com">
                                        contact@gmail.com
                                    </ActionLink>

                                </Heading>
                            </FlexGroup>
                        </FlexGroup>

                        <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>
                            <QR></QR>
                            <Button sizes="medium">
                                Download QR code
                            </Button>
                        </FlexGroup>

                    </FlexGroup>

                </Card>
                <Card>
                    <Header>
                        <Heading type="h1">
                            John Smith
                        </Heading>
                    </Header>

                    <FlexGroup>

                        <FlexGroup type="row">
                            <Icon>
                                <HiCalendarDays/>
                            </Icon>
                            <Heading type="h4" subheading>
                                18.05.2024 14:00
                            </Heading>
                        </FlexGroup>
                        <FlexGroup type="row">
                            <Icon>
                                <HiLocationMarker/>
                            </Icon>
                            <Heading type="h4" subheading>
                                Test route,Test, Test 10
                            </Heading>
                        </FlexGroup>

                        <FlexGroup type="row" contact>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiPhone/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="tel:+38970000000">
                                        +38970000000
                                    </ActionLink>
                                </Heading>
                            </FlexGroup>
                            <Separator vertical/>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiMail/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    <ActionLink href="mailto:contact@gmail.com">
                                        contact@gmail.com
                                    </ActionLink>

                                </Heading>
                            </FlexGroup>
                        </FlexGroup>

                        <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>
                            <QR></QR>
                            <Button sizes="medium">
                                Download QR code
                            </Button>
                        </FlexGroup>

                    </FlexGroup>

                </Card>
            </Cards>


        </>
    );
};

export default HomeAdminLayout;