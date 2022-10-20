import styled from 'styled-components';

export const ContainerStyle = styled.main`
  margin: 5rem auto;
  max-width: 640px;

  // Desktop
  @media screen and (max-width: 700px) {
    margin: 5.4rem 1.6rem;
  }

  // Mobile
  @media screen and (max-width: 300px) {
    margin: 5rem 0;
    min-width: 250px;
  }
`;
