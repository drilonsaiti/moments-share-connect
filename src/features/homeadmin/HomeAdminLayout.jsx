import HomeAdminOperations from "./HomeAdminOperations.jsx";
import styled from "styled-components";
import Heading from "../../ui/Heading.jsx";
import {HiCalendarDays, HiPhone} from "react-icons/hi2";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Icon from "../../ui/Icon.jsx";
import {HiLocationMarker, HiMail} from "react-icons/hi";
import Separator from "../../ui/Seperator.jsx";
import Button from "../../ui/Button.jsx";
import React, {useRef, useState} from "react";
import Cards from "../../ui/Cards.jsx";
import Card from "../../ui/Card.jsx";
import AddUser from "../authentication/AddUser.jsx";
import AddBucket from "./AddBucket.jsx";
import QrCode from "../../ui/QRCode.jsx";


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


const HomeAdminLayout = () => {

    const qrCodeRef = useRef(null);

    const downloadQrCode = (fileName) => {
        if (!qrCodeRef.current) {
            console.error("QR code ref is null.");
            return;
        }

        const canvas = qrCodeRef.current.querySelector("canvas");
        if (!canvas) {
            console.error("Canvas element not found.");
            return;
        }

        // Create a new canvas with the desired size.
        const newCanvas = document.createElement("canvas");
        newCanvas.width = 400;  // Set to your desired width.
        newCanvas.height = 400;  // Set to your desired height.

        // Draw the QR code onto the new canvas.
        const context = newCanvas.getContext("2d");
        context.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height);

        // Convert the new canvas to a data URL and download it.
        const qrCodeUrl = newCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = qrCodeUrl;
        link.download = `qrcode-${fileName}.png`;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (
        <>
            <FlexGroup buttons>

                <AddUser />
               <AddBucket />
            </FlexGroup>

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

                                <QrCode  text="test@gmail.com-2024-10-05" displayImg/>
                            <QrCode  text="test@gmail.com-2024-10-05" ref={qrCodeRef}/>
                            <Button sizes="medium" onClick={() => downloadQrCode('test@gmail.com-2024-10-05')}>
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

                            <QrCode  text="test@gmail.com-2024-10-05" displayImg/>
                            <QrCode  text="test@gmail.com-2024-10-05" ref={qrCodeRef}/>
                            <Button sizes="medium" onClick={() => downloadQrCode('test@gmail.com-2024-10-05')}>
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

                            <QrCode  text="test@gmail.com-2024-10-05" displayImg/>
                            <QrCode  text="test@gmail.com-2024-10-05" ref={qrCodeRef}/>
                            <Button sizes="medium" onClick={() => downloadQrCode('test@gmail.com-2024-10-05')}>
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

                            <QrCode  text="test@gmail.com-2024-10-05" displayImg/>
                            <QrCode  text="test@gmail.com-2024-10-05" ref={qrCodeRef}/>
                            <Button sizes="medium" onClick={() => downloadQrCode('test@gmail.com-2024-10-05')}>
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

                            <QrCode  text="test@gmail.com-2024-10-05" displayImg/>
                            <QrCode  text="test@gmail.com-2024-10-05" ref={qrCodeRef}/>
                            <Button sizes="medium" onClick={() => downloadQrCode('test@gmail.com-2024-10-05')}>
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