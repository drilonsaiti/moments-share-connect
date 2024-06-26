import styled, {css} from "styled-components";

export const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    margin-top: 1rem;
    z-index: 1;
    //grid-template-rows: repeat(2,1fr);
    grid-template-columns: ${(props) =>
    props.orientation === "vertical" ? "1fr" : "24rem 1fr 1.2fr"};
    gap: ${(props) => (props.orientation === "vertical" ? "0.8rem" : "2.4rem")};


    @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 1.4rem;
    }

    padding: 1.2rem 1rem;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: ${(props) =>
    props.orientation === "vertical"
        ? "none"
        : "1px solid var(--color-grey-100)"};
    }


    ${(props) =>
    props.orientation !== "vertical" && props.calendar !== 'calendar' &&
    css`
                &:has(button) {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1.2rem;

                    @media only screen and (max-width: 700px) {
                        flex-direction: column-reverse;
                    }
                }
            `}
    ${(props) =>
    props.calendar === 'calendar' &&
    css`
                display: flex;
                margin-left: 8px;
                justify-content: normal;
                gap: 20rem;
            `}
`;

export const Label = styled.label`
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function FormRow({label, error, children, orientation, calendar}) {
    return (
        <StyledFormRow orientation={orientation} calendar={calendar}>

            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

export default FormRow;
