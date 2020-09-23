import styled from "styled-components";

import wheel19 from "../../assets/wheels/19.svg";
import wheel21 from "../../assets/wheels/21.svg";

export const Container = styled.section`
  .tesla-wheels__component {
    float: left;
    width: 355px;
  }
  .tesla-wheels__title {
    letter-spacing: 2px;
    font-size: 16px;
  }
  .tesla-wheels__container {
    margin: 10px 0 0;
  }
  .tesla-wheels__item {
    cursor: pointer;
    width: 47%;
    height: 65px;
    border: 1px solid #ccc;
    display: inline-block;
    padding: 20px 0 0 90px;
    margin: 0 8px 0 0;
    background-color: #f7f7f7;
    background-position: 24.21053% 9px;
    background-repeat: no-repeat;
    background-size: 44px;
  }
  .tesla-wheels__item--19 {
    background-image: url(${wheel19});
  }
  .tesla-wheels__item--21 {
    background-image: url(${wheel21});
  }
  .tesla-wheels__item--focused {
    background-color: #f2f2f2;
  }
  .tesla-wheels__item--active {
    border-color: #39f;
    box-shadow: inset 0px 0px 0px 1px #39f;
  }
  .tesla-wheels__item p {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  .tesla-wheels__item input[type="radio"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
