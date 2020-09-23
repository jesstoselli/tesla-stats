import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
  background: #FFFFFF;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body, input, button {
    font: 300 14px/1.4 "Roboto", sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 400;
}

button {
    cursor: pointer;
    outline: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.cf:before,
.cf:after {
    content: '';
    display: table;
}
.cf:after {
    clear: both;
}
.cf {
  *zoom: 1;
}

`;
