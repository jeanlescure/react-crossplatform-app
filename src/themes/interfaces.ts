export interface Theme {
  name: string;
  displayName: string;
  light: {
    [key: string]: any;
  };
  dark: {
    [key: string]: any;
  };
  colors: any;
}
