import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    tab: {
      active: string;
      background: string;
    };
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      components: string;
      homePurple: string;
      paragraph: string;
    };
  }
}
