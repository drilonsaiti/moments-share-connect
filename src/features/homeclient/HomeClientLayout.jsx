import styled from "styled-components";
import Heading from "../../ui/Heading.jsx";
import {HiArrowTopRightOnSquare, HiCalendarDays, HiPhone} from "react-icons/hi2";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Icon from "../../ui/Icon.jsx";
import {HiLocationMarker, HiMail} from "react-icons/hi";
import Separator from "../../ui/Seperator.jsx";
import Button from "../../ui/Button.jsx";
import Cards from "../../ui/Cards.jsx";
import Card from "../../ui/Card.jsx";


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


const HomeClientLayout = () => {
    return (
        <>

            <Cards>
                <Card>
                    <Header>
                        <FlexGroup>
                            <Heading type="h4" subheading>
                                SemaDaka Event
                            </Heading>
                            <FlexGroup>
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
                            </FlexGroup>

                            <Heading type="h2">
                                Appointment Details
                            </Heading>

                        </FlexGroup>
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


                        <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>

                            <Button sizes="medium">
                                <FlexGroup type="row">
                                    <p>View all images (345)</p>
                                    <Icon type="secondary">
                                        <HiArrowTopRightOnSquare/>
                                    </Icon>
                                </FlexGroup>
                            </Button>
                        </FlexGroup>

                    </FlexGroup>

                </Card>
                <Card>
                    <Header>
                        <FlexGroup>
                            <Heading type="h4" subheading>
                                SemaDaka Event
                            </Heading>
                            <FlexGroup>
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
                            </FlexGroup>

                            <Heading type="h2">
                                Appointment Details
                            </Heading>

                        </FlexGroup>
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
                        <FlexGroup>
                            <Heading type="h4" subheading>
                                SemaDaka Event
                            </Heading>
                            <FlexGroup>
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
                            </FlexGroup>

                            <Heading type="h2">
                                Appointment Details
                            </Heading>

                        </FlexGroup>
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
                        <FlexGroup>
                            <Heading type="h4" subheading>
                                SemaDaka Event
                            </Heading>
                            <FlexGroup>
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
                            </FlexGroup>

                            <Heading type="h2">
                                Appointment Details
                            </Heading>

                        </FlexGroup>
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

export default HomeClientLayout;