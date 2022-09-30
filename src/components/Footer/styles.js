import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 3.25rem 0 1.5rem 0;
`;

export const Button = styled.button`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.blue};
  border: 1px solid ${(props) => props.theme.paleGrey};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  font-size: 0.6rem;
`;
