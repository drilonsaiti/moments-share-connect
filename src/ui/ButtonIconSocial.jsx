import styled, {css} from "styled-components";

const ButtonIconSocial = styled.button`
    background: none;
    border: none;
    padding: 0.6rem;
    border-radius: var(--border-radius-sm);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.2rem;
        height: 2.2rem;
        color: var(--color-brand-600);
    }

    ${(props) =>
    props.type === "icon" &&
    css`
                border-radius: 50%;
                padding: 1rem 1rem;
                background-color: var(--color-brand-500);

                & svg {
                    color: var(--color-brand-800);
                }

                &:hover {
                    background-color: var(--color-brand-700);

                    & svg {
                        color: var(--color-grey-0);
                    }

                }
            `}
`;

export default ButtonIconSocial;
