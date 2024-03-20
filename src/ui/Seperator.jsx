import styled from "styled-components";

const Separator = styled.div`

    width: ${(props) => (props.vertical ? '1px' : '100%')};
    height: ${(props) => (props.vertical ? '70%' : '1px')};
    background-color: var(--color-grey-400);
    margin: ${(props) => (props.vertical ? '0 0.5rem' : '0.5rem 0')};
    margin-top: 2px;

    @media only screen and (max-width: 430px) {
        display: none;
    }
`;

export default Separator