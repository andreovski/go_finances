import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      background: string,
      red: string,
      green: string,
      blue: string,
      blue_light: string,
      text_title: string,
      text_body: string,
      input: string,
      border_input: string,
      shape: string,
    }
  }
}