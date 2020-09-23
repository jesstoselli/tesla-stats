import React from "react";

import { Container } from "./styles";

interface carStatsProps {
  model: string;
  miles: number;
}

interface ICarStats {
  carstats: carStatsProps[];
}

const TeslaStats: React.FC<ICarStats> = ({ carstats }) => {
  const listItems = carstats.map((stat: carStatsProps) => (
    <li key={stat.model}>
      <div
        className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}
      ></div>
      <p>{stat.miles}</p>
    </li>
  ));

  return (
    <Container>
      <ul>{listItems}</ul>
    </Container>
  );
};

export default TeslaStats;
