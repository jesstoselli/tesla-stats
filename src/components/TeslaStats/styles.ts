import styled from "styled-components";

import model60 from "../../assets/models/60.svg";
import model60d from "../../assets/models/60d.svg";
import model75 from "../../assets/models/75.svg";
import model75d from "../../assets/models/75d.svg";
import model90 from "../../assets/models/90d.svg";
import modelp100d from "../../assets/models/p100d.svg";

export const Container = styled.section`
  margin: -70px 0 30px;

  ul {
    text-align: center;

    li {
      display: inline-block;
      width: 130px;
      position: relative;

      p {
        font-size: 40px;
        font-family: "Roboto";
        font-weight: 400;
        display: block;
        padding: 0 18px 0 0;
        position: relative;
        color: #008dff;
        text-align: right;
      }

      p:after {
        font-size: 14px;
        font-family: "Roboto";
        content: "MI";
        position: absolute;
        top: 8px;
        right: 0;
      }
    }
  }
  .tesla-stats-icon {
    height: 20px;
    background-size: auto 13px;
    background-position: top right;
    background-repeat: no-repeat;
  }

  .tesla-stats-icon--60 {
    background-image: url(${model60});
  }
  .tesla-stats-icon--60d {
    background-image: url(${model60d});
  }
  .tesla-stats-icon--75 {
    background-image: url(${model75});
  }
  .tesla-stats-icon--75d {
    background-image: url(${model75d});
  }
  .tesla-stats-icon--90d {
    background-image: url(${model90});
  }
  .tesla-stats-icon--p100d {
    background-image: url(${modelp100d});
  }
`;
