import styled from "styled-components";

export const Logo = styled.img`
  width: 15%;
  height: 15%;
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.grey};
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Bold = styled.div`
  color: ${(props) => props.theme.veryDarkBlue};
  font-weight: 700;
`;

export const SubscribeText = styled.p`
  // color: ${(props) => props.theme.veryDarkBlue};
  font-size: 0.75rem;
`;
