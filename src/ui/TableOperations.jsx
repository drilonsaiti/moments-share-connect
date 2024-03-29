import styled from 'styled-components';

const TableOperations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    @media only screen and (min-width: 900px) {
        flex-direction: row-reverse;
        align-self: center;
    }
`;

export default TableOperations;
