import React from "react";

import { Container } from "./styles";

const TeslaNotice: React.FC = () => {
  return (
    <Container>
      <p>
        The actual amount of range that you experience will vary based on your
        particular use conditions. See how particular use conditions may affect
        your range in our simulation model.
      </p>
      <p>
        Vehicle range may vary depending on the vehicle configuration, battery
        age and condition, driving style and operating, environmental and
        climate conditions.
      </p>
    </Container>
  );
};

export default TeslaNotice;
