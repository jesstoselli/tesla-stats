import React from "react";

import { Container } from "./styles";

interface IinitValues {
  title: string;
  unit: string;
  step: number;
  min: number;
  max: number;
}

interface ICounterProps {
  currentValue: number;
  increment(e: React.MouseEvent<HTMLElement>, title: string): void;
  decrement(e: React.MouseEvent<HTMLElement>, title: string): void;
  initValues: IinitValues;
}

const TeslaCounter: React.FC<ICounterProps> = ({
  currentValue,
  increment,
  decrement,
  initValues,
}) => (
  <Container>
    <div className='tesla-counter'>
      <p className='tesla-counter__title'>{initValues.title}</p>
      <div className='tesla-counter__container cf'>
        <div className='tesla-counter__item'>
          <p className='tesla-counter__number'>
            {currentValue}
            <span>{initValues.unit}</span>
          </p>
          <div className='tesla-counter__controls'>
            <button
              onClick={(e) => increment(e, initValues.title)}
              disabled={currentValue >= initValues.max}
            ></button>
            <button
              onClick={(e) => decrement(e, initValues.title)}
              disabled={currentValue <= initValues.min}
            ></button>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default TeslaCounter;
