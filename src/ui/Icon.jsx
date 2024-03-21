import styled, {css} from "styled-components";

const Icon = styled.svg`
    width: 2.4rem;
    height: 2.4rem;
    font-size: 2rem;
    color: var(--color-brand-600);
    transition: all 0.3s;

    ${(props) =>
            props.type === "secondary" &&
            css`
                color: var(--color-brand-50);
            `}
`

export default Icon;