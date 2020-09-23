import styled from "styled-components";

import acOff from "../../assets/climate/acOff.svg";
import acOn from "../../assets/climate/acOn.svg";
import heatOff from "../../assets/climate/heatOff.svg";
import heatOn from "../../assets/climate/heatOn.svg";

export const Container = styled.section`
  .tesla-climate {
    float: left;
  }
  .tesla-climate__item {
    cursor: pointer;
    display: block;
    width: 100px;
    height: 100px;
    border: 6px solid #f7f7f7;
    border-radius: 50%;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    color: #666;
    background: #fff;
  }
  .tesla-climate__item--active {
    color: #fff;
    background: #33a0ff;
    background: -moz-linear-gradient(top, #33a0ff 0%, #388bff 100%);
    background: -webkit-linear-gradient(top, #33a0ff 0%, #388bff 100%);
    background: linear-gradient(to bottom, #33a0ff 0%, #388bff 100%);
  }
  .tesla-climate__item--active.tesla-heat {
    background: #d64800;
    background: -moz-linear-gradient(top, #d64800 0%, #d20200 100%);
    background: -webkit-linear-gradient(top, #d64800 0%, #d20200 100%);
    background: linear-gradient(to bottom, #d64800 0%, #d20200 100%);
  }
  .tesla-climate__icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 8px auto 0;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${acOff});
  }
  .tesla-heat .tesla-climate__icon {
    background-image: url(${heatOff});
  }
  .tesla-climate__item--active .tesla-climate__icon {
    background-image: url(${acOn});
  }
  .tesla-climate__item--active.tesla-heat .tesla-climate__icon {
    background-image: url(${heatOn});
  }
  .tesla-climate p {
    margin: 14px 0 0;
    text-align: center;
    font-size: 10px;
    text-transform: uppercase;
  }
  .tesla-climate input[type="checkbox"] {
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
