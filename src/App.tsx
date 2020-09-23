import React from "react";
import "./App.css";
import Header from "./components/Header";
import TeslaBattery from "./containers/TeslaBattery";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <TeslaBattery />
      <GlobalStyle />
    </>
  );
};

export default App;
