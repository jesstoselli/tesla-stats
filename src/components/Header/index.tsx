import React from "react";

import { Container } from "./styles";

import logoUrl from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoUrl} alt='Tesla' />
    </Container>
  );
};

export default Header;
