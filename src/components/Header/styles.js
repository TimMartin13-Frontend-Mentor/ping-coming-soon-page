import styled from "styled-components";

export const Logo = styled.img`
  width: 3.5rem;
  margin-bottom: 1.5rem;
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.grey};
  // font-size: 1.4rem;
  font-size: 6vw;
  font-weight: 300;

  @media screen and (min-width: 750px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 370px) {
    font-size: 1.4rem;
  }
`;

export const Bold = styled.div`
  color: ${(props) => props.theme.veryDarkBlue};
  font-weight: 700;
`;

export const SubscribeText = styled.p`
  font-size: 0.75rem;
  margin: 1.2rem 0 2rem 0;
`;
