import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorDarkest: string;
    colorDark: string;
    colorMedium: string;
    colorLight: string;
    colorTheme: string;
    colorAccent: string;
  }
}
