import { text } from "stream/consumers";

// styles/theme.ts
export const lightTheme = {
  colors: {
    primary: "#20AAFB",
    background: "#fff",
    text: "#000",
    textSecondary: "#fff",
    secondary: '#272728',
    greyLight: '#D9D9D9',
    contrastBg: '#000',
    grey: '#f2f7fa',
    transparent: 'transparent',
  },
  fontWeights: {
    lighter: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
    strong: 900
  }
};

export const darkTheme = {
  colors: {
    primary: "#79ffe1",
    background: "#171717",
    text: "#fff",
    textSecondary: "#000",
    secondary: '#272728',
    greyLight: '#D9D9D9',
    contrastBg: '#fff'
  },
  fontWeights: {
    lighter: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
    strong: 900
  }
};

export type ThemeType = typeof lightTheme;
export type Theme = keyof typeof lightTheme.colors;
export type ThemeKey = keyof typeof lightTheme;