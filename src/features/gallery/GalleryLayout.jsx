import {Grids} from "../../ui/GridIcon.jsx";
import styled, {css} from "styled-components";

const StyledHome = styled.div`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 2rem 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    height: 100vh;

    @media only screen and (min-width: 900px) {
        align-items: normal;
        height: 95vh;
    }
    @media only screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }
`

const GridIcon = styled.div`
    height: 13rem;
    width: 13rem;
    background-color: var(--color-grey-700);
    border-radius: 1.8px;

    ${(props) =>
            props.type === "one" &&
            css`
                height: 30rem;
                width: 30rem;
            `
    }
    ${(props) =>
            props.type === "two" &&
            css`
                height: 19rem;
                width: 19rem;
            `
    }
    ${(props) =>
            props.type === "three" &&
            css`
                height: 13rem;
                width: 13rem;
            `
    }
    ${(props) =>
            props.type === "four" &&
            css`
                height: 9rem;
                width: 9rem;
            `
    }
`
const GalleryLayout = () => {
    const array = Array.from({length: 15});
    return (

        <Grids columns={'repeat(3, 1fr)'} style={{justifyItems: 'center'}}>
            {array.map((_, index) => (
                <GridIcon key={index}/>
            ))}
        </Grids>

    );
};

export default GalleryLayout;