import React, { useState } from "react";
import {
  Button,
  EmailInput,
  ErrorMessage,
  InputContainer,
  InputStyles,
} from "./styles";

const UserInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const emailValidation = (e) => {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!regEx.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <InputStyles>
      <InputContainer>
        <EmailInput
          name="EmailInput"
          type="text"
          placeholder="Your email address..."
          value={email}
          onChange={handleInputChange}
        />
        {error ? (
          <ErrorMessage>Please provide a valid email address</ErrorMessage>
        ) : (
          ""
        )}
      </InputContainer>
      <Button type="submit" onClick={emailValidation}>
        Notify Me
      </Button>
    </InputStyles>
  );
};

export default UserInput;
