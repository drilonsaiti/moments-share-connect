import styled from "styled-components";

const Cards = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media only screen and (min-width: 920px) {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    }
`

export default Cards;