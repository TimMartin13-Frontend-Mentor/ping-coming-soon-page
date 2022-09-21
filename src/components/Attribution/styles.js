import styled from "styled-components";

export const Text = styled.h4`
  margin: 2rem;
  font-size: 11px;
  text-align: center;
  color: ${(props) => props.theme.notQuitePaleBlue};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.grey};
`;
