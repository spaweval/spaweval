// styles/theme.ts
export const lightTheme = {
  colors: {
    primary: "#0070f3",
    background: "#fff",
    text: "#000",
  },
};

export const darkTheme = {
  colors: {
    primary: "#79ffe1",
    background: "#000",
    text: "#fff",
  },
};

export type ThemeType = typeof lightTheme;
export type Theme = keyof typeof lightTheme.colors;
export type ThemeKey = keyof typeof lightTheme;