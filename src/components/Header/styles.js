import styled from 'styled-components';

export const Logo = styled.img`
  width: 3.4rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 540px) {
    width: 5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.grey};
  font-size: 6vw;
  font-weight: 300;

  @media screen and (min-width: 750px) {
    font-size: 2.8rem;
    margin-bottom: 1rem;
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

  @media screen and (min-width: 600px) {
    font-size: 1.2rem;
    margin: 0em 0 2rem 0;
  }
`;
