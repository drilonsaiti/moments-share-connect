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
import {Link} from "react-router-dom";
import Spinner from "../../ui/Spinner.jsx";
import React from "react";
import {useBucket} from "./useBucket.js";
import {useCurrentUser} from "../authentication/useCurrentUser.js";
import AccessDenied from "../../ui/AccessDenied.jsx";


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
    const {data, isLoading: isLoadingCurrentUser} = useCurrentUser();
    const {isLoading, bucket} = useBucket(data?.email);


    if (isLoading || isLoadingCurrentUser) return <Spinner/>
    if (!bucket) return <AccessDenied/>
    return (
        <>

            <Cards>
                {bucket?.map(bucket => (
                    <Card key={bucket.id}>
                        <Header>
                            <FlexGroup>
                                <Heading type="h4" subheading>
                                    Sema Event
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
                                    {bucket.date}
                                </Heading>
                            </FlexGroup>
                            <FlexGroup type="row">
                                <Icon>
                                    <HiLocationMarker/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    {bucket.location}
                                </Heading>
                            </FlexGroup>


                            <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>

                                <Button sizes="medium">
                                    <Link replace to={`/gallery/${bucket.bucket_name}`}>
                                        <FlexGroup type="row">
                                            <p>{`View all images (${bucket.image_urls.length})`}</p>
                                            <Icon type="secondary">
                                                <HiArrowTopRightOnSquare/>
                                            </Icon>
                                        </FlexGroup>
                                    </Link>
                                </Button>
                            </FlexGroup>

                        </FlexGroup>

                    </Card>
                ))}

            </Cards>


        </>
    );
};

export default HomeClientLayout;