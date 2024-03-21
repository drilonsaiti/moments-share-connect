import styled from "styled-components";

const Card = styled.div`
    display: grid;
    gap: 2rem;
    text-align: center;
    background-color: var(--color-grey-0);
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s ease;
    border: 0.1px solid var(--border-color-50);

    &:hover {
        background: linear-gradient(to left top, rgba(16, 65, 47, .05) 0%, var(--hover-clinic-color) 50%, rgba(16, 65, 47, .1) 100%),
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))
    }

    @media only screen and (min-width: 900px) {
        justify-self: center;
    }
    @media only screen and (max-width: 500px) {
        padding: 1rem;
    }

    @media only screen and (max-width: 450px) {
        align-self: center;
        width: 110%;
    }
`;

export default Card;