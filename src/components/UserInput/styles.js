import styled from "styled-components";

export const InputStyles = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7rem;

  @media screen and (min-width: 600px) {
    width: 70%;
    margin-right: 0.7rem;
  }
`;

export const EmailInput = styled.input`
  border: 1px solid
    ${(props) => (props.error ? props.theme.lightRed : props.theme.paleBlue)};
  border-radius: 2rem;
  height: 3.3rem;
  font-size: 0.8rem;
  padding-left: 2rem;

  &:focus::placeholder {
    color: ${(props) => props.theme.veryDarkBlue};
  }

  &::placeholder {
    color: ${(props) =>
      props.error ? props.theme.veryDarkBlue : props.theme.paleBlue};
  }
`;

export const ErrorMessage = styled.h6`
  font-size: 0.75rem;
  font-style: italic;
  font-family: "Libre Franklin", sans-serif;
  color: ${(props) => props.theme.lightRed};
  text-align: center;
  margin: 0.5rem 0 1rem 0;
  @media screen and (min-width: 600px) {
    text-align: left;
    margin: 0.5rem 0 0 2rem;
  }
`;

export const Button = styled.button`
  border-radius: 2rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-style: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Libre Franklin", sans-serif;
  box-shadow: 2px 2px 8px 3px ${(props) => props.theme.paleBlue};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.notQuitePaleBlue};
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    width: 30%;
  }
`;
