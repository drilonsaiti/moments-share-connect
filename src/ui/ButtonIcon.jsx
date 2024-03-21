import styled, {css} from "styled-components";

const ButtonIcon = styled.button`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    transition: all 0.3s;
    background: none;
    border: none;

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-brand-700);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 2rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }

    ${(props) =>
            props.navBar &&
            css`
               
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    color: var(--color-grey-900);
                    font-size: 1.6rem;
                    font-weight: 500;
                    transition: all 0.3s;
                    background: none;
                    border: none;

                &:hover svg,
                &:active svg,
                &.active:link svg,
                &.active:visited svg {
                    color: var(--color-brand-600);

                }

                & svg {
                    width: 2.1rem;
                    height: 2.1rem;
                    color: var(--color-grey-900);
                    transition: all 0.3s;
                }

                &:hover,
                &:active,
                &.active:link,
                &.active:visited {
                    color: var(--color-brand-800);
                }
            `}
`;

export default ButtonIcon;
