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
  const [placeholder, setPlaceholder] = useState("Your email address...");
  const [error, setError] = useState(false);

  const emailValidation = (e) => {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!regEx.test(email)) {
      setError(true);
      setPlaceholder("example@email.com");
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
          placeholder={placeholder}
          aria-label="email"
          value={email}
          onChange={handleInputChange}
          error={error}
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
