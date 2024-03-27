import QRCode from "qrcode.react";
import React from "react";
import styled from "styled-components";

const QrCodeContainer = styled.div`
    width: 60px;
    height: 60px;
    padding: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// eslint-disable-next-line react/display-name
const QrCode = React.forwardRef(({text,displayImg}, ref) => {
    return (
        <QrCodeContainer ref={displayImg ? null : ref} style={{display: `${displayImg ? 'flex' : 'none'}`}}>
            <QRCode value={text} size={displayImg ? 50 : 400}/>
        </QrCodeContainer>
    );
});

export default QrCode;