import styled from "styled-components";

export const Grids = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    gap: .2rem;
    cursor: pointer;
`
export const GridIcon = styled.div`
    height: .9rem;
    width: .9rem;
    background-color: var(--color-grey-700);
    border-radius: 1.8px;
`



