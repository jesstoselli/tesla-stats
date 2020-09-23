import React from "react";

import { Container } from "./styles";

interface IClimateProps {
  value: boolean;
  limit: boolean;
  handleChangeClimate(): void;
}

const TeslaClimate: React.FC<IClimateProps> = ({
  value,
  limit,
  handleChangeClimate,
}) => {
  return (
    <Container>
      <div className='tesla-climate'>
        <label
          className={`tesla-climate__item ${
            value ? "tesla-climate__item--active" : ""
          }  ${!limit ? "tesla-heat" : ""}`}
        >
          <p>
            {limit ? "ac" : "heat"} {value ? "on" : "off"}
          </p>
          <i className='tesla-climate__icon'></i>
          <input
            type='checkbox'
            name='climate'
            checked={value}
            onChange={() => {
              handleChangeClimate();
            }}
          />
        </label>
      </div>
    </Container>
  );
};

export default TeslaClimate;
