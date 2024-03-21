import styled from "styled-components";

const Paragraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  font-size: 1.6rem;
  margin-left: 0.8rem;
    margin-top: 1rem;
  color: var(--color-grey-900);  

  & span {
    font-weight: 600;
  }
`;

export default Paragraph;