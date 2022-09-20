import React from "react";
import { InputStyles, EmailInput, Button } from "./styles";

const handleInputChange = (event) => {
  console.log(event.target.value);
};

const UserInput = () => {
  return (
    <InputStyles>
      <EmailInput
        name="EmailInput"
        type="text"
        onChange={handleInputChange}
        placeholder="Your email address..."
      />
      <Button>Notify Me</Button>
    </InputStyles>
  );
};

export default UserInput;
