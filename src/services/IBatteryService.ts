export default interface IBatteryService {
  [key: string]: {
    [key: number]: {
      on: {
        speed: {
          [key: number]: {
            [key: string]: number;
          };
        };
      };
      off: {
        speed: {
          [key: number]: {
            [key: string]: number;
          };
        };
      };
    };
  };
}
