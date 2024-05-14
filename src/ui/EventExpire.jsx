import styled from "styled-components";
import FlexGroup from "./FlexGroup.jsx";
import Heading from "./Heading.jsx";
import {FaInstagram} from "react-icons/fa6";
import Icon from "./Icon.jsx";

const StyledEventExpire = styled.main`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    /* box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);

    padding: 4.8rem 0;
    flex: 0 1 96rem;
    text-align: center;

    & h1 {
        margin-bottom: 3.2rem;
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

const ParagraphInsta = styled.p`
    text-decoration: underline;
    margin-bottom: 3px;

    &:hover {
        color: var(--color-brand-600);
    }
`

const EventExpire = () => {
    return (
        <StyledEventExpire>
            <Box>
                <FlexGroup type="row" style={{justifyContent: 'center', alignSelf: 'start'}}>
                    <FlexGroup style={{gap: 0, alignItems: 'center'}}>
                        <FlexGroup type="row" changeDirection eventOver style={{alignItems: 'start'}}>
                            <Heading style={{alignSelf: 'center', textAlign: 'center', marginBottom: 0}}>Sema
                                Event</Heading>
                        </FlexGroup>

                        <Heading type="h4" subheading>
                            <Contact href="https://www.instagram.com/sema.event/">
                                <Icon>
                                    <FaInstagram/>
                                </Icon>
                                <ParagraphInsta>
                                    sema.event
                                </ParagraphInsta>
                            </Contact>
                        </Heading>
                    </FlexGroup>
                </FlexGroup>

                <Heading type="h1" eventOver>The event is over.</Heading>
            </Box>
        </StyledEventExpire>
    )
}

export default EventExpire;
