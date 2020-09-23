import React from "react";

import { Container } from "./styles";

interface TeslaCarProps {
  wheelsize: number;
}

const TeslaCar: React.FC<TeslaCarProps> = ({ wheelsize }) => {
  return (
    <Container>
      <div className='tesla-wheels'>
        <div
          className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheelsize}`}
        ></div>
        <div
          className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelsize}`}
        ></div>
      </div>
    </Container>
  );
};

export default TeslaCar;
