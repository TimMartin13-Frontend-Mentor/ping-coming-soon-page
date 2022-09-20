import React from "react";
import { Bold, Heading, Logo, SubscribeText } from "./styles";
import UserInput from "../UserInput";

const Header = () => {
  return (
    <>
      <Logo src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Ping" />
      <Heading>
        We are launching <Bold>&nbsp;soon!</Bold>
      </Heading>
      <SubscribeText>Subscribe and get notified</SubscribeText>
      <UserInput />
    </>
  );
};

export default Header;
