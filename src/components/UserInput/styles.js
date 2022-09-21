import styled from "styled-components";

export const InputStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const EmailInput = styled.input`
  border: 1px solid ${(props) => props.theme.paleBlue};
  border-radius: 1.5rem;
  height: 2.3rem;
  font-size: 0.8rem;
  padding-left: 2rem;
  margin-bottom: 0.7rem;
  color: ${(props) => props.theme.paleBlue};

  @media screen and (min-width: 600px) {
    width: 66%;
    margin-right: 0.7rem;
  }
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
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.notQuitePaleBlue};
  }

  @media screen and (min-width: 600px) {
    width: 33%;
  }
`;
