import { FontWeight } from './../../node_modules/csstype/index.d';
import "styled-components";
import type { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
        [string:string]: string
    },
    fontWeights: {
      [string: string]: number
    }
  }
}
