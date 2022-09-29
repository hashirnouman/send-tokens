// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      primary: string;
      secondary: string;
      light: string;
      white: string;
    };
  }
}
