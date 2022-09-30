import React from "react";
import { Copyright, IconContainer, Button } from "./styles";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <IconContainer>
        <Button>
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </Button>
        <Button>
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            transform="right-1 down-1"
          />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </Button>
      </IconContainer>
      <Copyright>&copy; Copyright Ping. All rights reserved.</Copyright>
    </>
  );
};

export default Footer;
