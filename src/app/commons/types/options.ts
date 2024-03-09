export interface Options {
  [key: string]: ConfigDetails;
}

export interface ConfigDetails {
  configs: Config[];
  towHitch: boolean;
  yoke: boolean;
}

export interface Config {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}
