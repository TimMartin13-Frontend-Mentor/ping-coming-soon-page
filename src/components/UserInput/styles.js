import styled from "styled-components";

export const InputStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const EmailInput = styled.input`
  border: 1px solid ${(props) => props.theme.paleBlue};
  border-radius: 1.5rem;
  height: 2.5rem;
  font-size: 0.8rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.paleBlue};
`;

export const Button = styled.button`
  border-radius: 1.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-style: none;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: "Libre Franklin", sans-serif;
  box-shadow: 2px 2px 8px 3px ${(props) => props.theme.paleBlue};

  &:hover {
    background-color: ${(props) => props.theme.notQuitePaleBlue};
  }
`;
