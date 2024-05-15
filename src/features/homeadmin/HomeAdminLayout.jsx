import HomeAdminOperations from "./HomeAdminOperations.jsx";
import styled from "styled-components";
import Heading from "../../ui/Heading.jsx";
import {HiCalendarDays, HiPhone} from "react-icons/hi2";
import FlexGroup from "../../ui/FlexGroup.jsx";
import Icon from "../../ui/Icon.jsx";
import {HiLocationMarker, HiMail, HiPencil, HiTrash} from "react-icons/hi";
import Separator from "../../ui/Seperator.jsx";
import Button from "../../ui/Button.jsx";
import React, {useRef, useState} from "react";
import Cards from "../../ui/Cards.jsx";
import Card from "../../ui/Card.jsx";
import AddUser from "../authentication/AddUser.jsx";
import AddBucket from "./AddBucket.jsx";
import QrCode from "../../ui/QRCode.jsx";
import CreateCabinForm from "./CreateBucketForm.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import {useBuckets} from "./useBuckets.js";
import Spinner from "../../ui/Spinner.jsx";
import Menus from "../../ui/Menus.jsx";
import Modal from "../../ui/Modal.jsx";
import {useDeleteBucket} from "./useDeleteBucket.js";
import SearchInput from "../../ui/SearchInput.jsx";
import {useSearchParams} from "react-router-dom";
import {formatDateHelper} from "../../utils/helpers.js";


const Header = styled.div`

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
    const {isLoading, buckets} = useBuckets();
    const {isDeleting, deleteBucket} = useDeleteBucket();
    const qrCodeRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [searchParams] = useSearchParams();
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


    if (isLoading) return <Spinner/>

    const filterValue = searchParams.get("types") || "all";

    let filteredBuckets;
    if (filterValue === "all") filteredBuckets = buckets;
    if (filterValue === "next")
        filteredBuckets = buckets.filter((bucket) => new Date(bucket.date) >= new Date());
    if (filterValue === "past")
        filteredBuckets = buckets.filter((bucket) => new Date(bucket.date) <= new Date());

    const handleSearchInputChange = (input) => {
        input === '' ? setSearchInput('') :
            setSearchInput(event.target.value);
    };

    const searchedBuckets = filteredBuckets?.filter((bucket) => {
        const searchField = bucket.email
        return searchField.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <>
            <FlexGroup buttons>

                <AddUser/>
                <AddBucket/>
            </FlexGroup>

            <FlexGroup type="row" style={{alignSelf: 'center'}} operations>
                <SearchInput value={searchInput} onChange={handleSearchInputChange}/>
                <HomeAdminOperations/>
            </FlexGroup>
            <Cards>
                {searchedBuckets.map(bucket => (

                    <Card key={bucket.id}>

                        <Header>
                            <FlexGroup type="row" style={{justifyContent: 'space-between'}}>
                                <Heading type="h1">
                                    {bucket.full_name}
                                </Heading>
                                <Menus>
                                    <Modal>

                                        <Menus.Menu>
                                            <Menus.Toggle id={bucket.id}/>

                                            <Menus.List id={bucket.id}>


                                                <Modal.Open opens="edit">
                                                    <Menus.Button icon={<HiPencil/>}>Edit</Menus.Button>
                                                </Modal.Open>

                                                <Modal.Open opens="delete">
                                                    <Menus.Button icon={<HiTrash/>}>Delete</Menus.Button>
                                                </Modal.Open>
                                            </Menus.List>
                                            <Modal.Window name="edit">
                                                <CreateCabinForm bucketToEdit={bucket}/>
                                            </Modal.Window>

                                            <Modal.Window name="delete">
                                                <ConfirmDelete
                                                    resourceName="bucket"
                                                    disabled={isDeleting}
                                                    onConfirm={() => deleteBucket(bucket.id, bucket.bucket_name)}
                                                />
                                            </Modal.Window>
                                        </Menus.Menu>
                                    </Modal>
                                </Menus>

                            </FlexGroup>
                        </Header>

                        <FlexGroup>

                            <FlexGroup type="row">
                                <Icon>
                                    <HiCalendarDays/>
                                </Icon>
                                <Heading type="h4" subheading>
                                    {formatDateHelper(new Date(bucket.date))}
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

                            <FlexGroup type="row" contact>
                                <FlexGroup type="row">
                                    <Icon>
                                        <HiPhone/>
                                    </Icon>
                                    <Heading type="h4" subheading>
                                        <ActionLink href={`href:${bucket.contact_number}`}>
                                            {bucket.contact_number}
                                        </ActionLink>
                                    </Heading>
                                </FlexGroup>
                                <Separator vertical/>
                                <FlexGroup type="row">
                                    <Icon>
                                        <HiMail/>
                                    </Icon>
                                    <Heading type="h4" subheading>
                                        <ActionLink href={`mailto:${bucket.email}`}>
                                            {bucket.email}
                                        </ActionLink>

                                    </Heading>
                                </FlexGroup>
                            </FlexGroup>

                            <FlexGroup type="row" style={{alignSelf: 'center', alignItems: 'center'}}>

                                <QrCode
                                    text={`https://moments-share-connect.vercel.app/take-photo/${bucket.bucket_name}`}
                                    displayImg/>
                                <QrCode
                                    text={`https://moments-share-connect.vercel.app/take-photo/${bucket.bucket_name}`}
                                    ref={qrCodeRef}/>
                                <Button sizes="medium" onClick={() => downloadQrCode(`QRCode-${bucket.bucket_name}`)}>
                                    Download QR code
                                </Button>
                            </FlexGroup>

                        </FlexGroup>
                    </Card>

                ))}


            </Cards>


        </>
    );
};

export default HomeAdminLayout;