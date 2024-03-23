import styled from "styled-components";

export const Grids = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    gap: .3rem;
    cursor: pointer;
`
export const GridIcon = styled.div`
    height: .8rem;
    width: .8rem;
    background-color: var(--color-grey-700);
    border-radius: 1.8px;
`



