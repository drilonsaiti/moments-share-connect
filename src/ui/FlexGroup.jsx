import styled, {css} from "styled-components";

const FlexGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    gap: 1rem;


    ${(props) =>
            props.type === "row" &&
            css`
                flex-direction: row;
            `}

    ${(props) =>
            props.header &&
            css`
                @media only screen and (max-width: 430px) {
                    gap: 0;
                }
            `}

    ${(props) =>
            props.contact &&
            css`
                @media only screen and (max-width: 430px) {
                    flex-direction: column;
                }
            `}
`;

export default FlexGroup;