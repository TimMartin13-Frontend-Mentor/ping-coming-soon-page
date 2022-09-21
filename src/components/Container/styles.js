import styled from "styled-components";

export const ContainerStyle = styled.main`
  margin: 4.8rem auto;
  max-width: 640px;

  @media screen and (max-width: 700px) {
    margin: 4.8rem 1.6rem;
  }

  @media screen and (max-width: 300px) {
    margin: 4.8rem 0;
    min-width: 250px;
  }
`;
