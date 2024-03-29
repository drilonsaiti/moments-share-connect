import styled, {css} from "styled-components";

const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

const variations = {
    primary: css`
        color: var(--color-brand-50);
        background-color: var(--color-brand-600);

        &:hover {
            background-color: var(--color-brand-700);
        }
    `,
    secondary: css`
        color: var(--color-grey-600);
        background: var(--color-grey-0);
        border: 1px solid var(--color-grey-200);

        &:hover {
            background-color: var(--color-grey-50);
        }
    `,
    danger: css`
        color: var(--color-red-100);
        background-color: var(--color-red-700);

        &:hover {
            background-color: var(--color-red-800);
        }
    `,
};

const Button = styled.button`
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    @media only screen and (max-width: 900px) {
        width: 100% !important;
    }

    @media only screen and (max-width: 450px) {
        ${props => !props.smallButton && !props.signUp && css`
            font-size: 2rem !important;
        `}
    }

    ${(props) =>
    props.notFound &&
    css`
                display: flex;
                align-items: center;
                margin: 0 auto;
            `}
    ${(props) =>
    props.smallButton &&
    css`
                font-size: 1.4rem !important;
                padding: .8rem .8rem;
            `}

    ${(props) => sizes[props.size]}
    ${(props) => variations[props.variation]}
    ${(props) =>
    props.signup &&
    css`
                @media only screen and (max-width: 450px) {
                    font-size: 1.4rem !important;
                }
            `}


`;

Button.defaultProps = {
    variation: "primary",
    size: "medium",
};

export default Button;
