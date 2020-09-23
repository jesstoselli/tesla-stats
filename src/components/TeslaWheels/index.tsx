import React from "react";

import { Container } from "./styles";

interface IWheelsProps {
  value: number;
  handleChangeWheels(size: number): void;
}

const TeslaWheels: React.FC<IWheelsProps> = ({ value, handleChangeWheels }) => {
  const sizes = [19, 21];

  const LabelItems = sizes.map((size) => (
    <label
      key={size}
      className={`tesla-wheels__item tesla-wheels__item--${size} ${
        value === size ? "tesla-wheels__item--active" : ""
      }`}
    >
      <input
        type='radio'
        name='wheelsize'
        value={size}
        checked={value === size}
        onChange={() => {
          handleChangeWheels(size);
        }}
      />
      <p>{size}"</p>
    </label>
  ));

  return (
    <Container>
      <div className='tesla-wheels__component'>
        <p className='tesla-wheels__title'>Wheels</p>
        <div className='tesla-wheels__container cf'>{LabelItems}</div>
      </div>
    </Container>
  );
};

export default TeslaWheels;
