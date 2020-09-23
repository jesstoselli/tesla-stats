import React, { useCallback, useEffect, useState } from "react";

import BatteryService from "../../services/BatteryService";
import IBatteryService from "../../services/IBatteryService";

import TeslaCar from "../../components/TeslaCar";
import TeslaNotice from "../../components/TeslaNotice";

import { Container } from "./styles";
import TeslaStats from "../../components/TeslaStats";
import TeslaCounter from "../../components/TeslaCounter";
import TeslaClimate from "../../components/TeslaClimate";
import TeslaWheels from "../../components/TeslaWheels";

interface valueProps {
  speed: number;
  temperature: number;
  climate: boolean;
  wheels: number;
}

interface carStatsProps {
  model: string;
  miles: number;
}

const counterDefaultVals = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70,
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40,
  },
};

const TeslaBattery: React.FC = () => {
  const [carStats, setCarStats] = useState<carStatsProps[]>([]);
  const [config, setConfig] = useState<valueProps>({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19,
  });

  const calculateStats = useCallback(
    (models: string[], value: valueProps): carStatsProps[] => {
      const batteryService = new BatteryService();
      const dataModels: any = batteryService.getModelData();

      return models.map((model) => {
        const { speed, temperature, climate, wheels } = value;
        const miles =
          dataModels[model][wheels][climate ? "on" : "off"].speed[speed][
            temperature
          ];
        return {
          model,
          miles,
        };
      });
    },
    []
  );

  const statsUpdate = useCallback(() => {
    const carModels = ["60", "60D", "75", "75D", "90D", "P100D"];

    setCarStats(calculateStats(carModels, config));
  }, [calculateStats, config]);

  useEffect(() => {
    statsUpdate();
  }, [config, statsUpdate]);

  const updateCounterState = useCallback(
    (title, newValue) => {
      const newConfig = { ...config };
      // update config state with new value
      title === "Speed"
        ? (newConfig["speed"] = newValue)
        : (newConfig["temperature"] = newValue);
      // update our state
      setConfig(newConfig);
    },
    [config]
  );

  const increment = useCallback(
    (e, title) => {
      e.preventDefault();
      let currentValue, maxValue, step;
      const { speed, temperature } = counterDefaultVals;
      if (title === "Speed") {
        currentValue = config.speed;
        maxValue = speed.max;
        step = speed.step;
      } else {
        currentValue = config.temperature;
        maxValue = temperature.max;
        step = temperature.step;
      }
      if (currentValue < maxValue) {
        const newValue = currentValue + step;
        updateCounterState(title, newValue);
      }
    },
    [config.speed, config.temperature, updateCounterState]
  );

  const decrement = useCallback(
    (e, title) => {
      e.preventDefault();
      let currentValue, minValue, step;
      const { speed, temperature } = counterDefaultVals;
      if (title === "Speed") {
        currentValue = config.speed;
        minValue = speed.min;
        step = speed.step;
      } else {
        currentValue = config.temperature;
        minValue = temperature.min;
        step = temperature.step;
      }
      if (currentValue > minValue) {
        const newValue = currentValue - step;
        updateCounterState(title, newValue);
      }
    },
    [config.speed, config.temperature, updateCounterState]
  );

  const handleChangeClimate = useCallback(() => {
    const newConfig = { ...config };
    newConfig["climate"] = !config.climate;
    setConfig(newConfig);
  }, [config]);

  const handleChangeWheels = useCallback(
    (size: number) => {
      const newConfig = { ...config };
      newConfig["wheels"] = size;
      setConfig(newConfig);
    },
    [config]
  );

  return (
    <Container>
      <h1>Range Per Charge</h1>
      <TeslaCar wheelsize={config.wheels} />
      <TeslaStats carstats={carStats} />
      <div className='tesla-controls cf'>
        <TeslaCounter
          currentValue={config.speed}
          initValues={counterDefaultVals.speed}
          increment={increment}
          decrement={decrement}
        />
        <div className='tesla-climate-container cf'>
          <TeslaCounter
            currentValue={config.temperature}
            initValues={counterDefaultVals.temperature}
            increment={increment}
            decrement={decrement}
          />
          <TeslaClimate
            value={config.climate}
            limit={config.temperature > 10}
            handleChangeClimate={handleChangeClimate}
          />
        </div>
        <TeslaWheels
          value={config.wheels}
          handleChangeWheels={handleChangeWheels}
        />
      </div>

      <TeslaNotice />
    </Container>
  );
};

export default TeslaBattery;
