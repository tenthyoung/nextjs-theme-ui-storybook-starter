// Tailwind-inspired Theme
// NOTE:
// - Please don't modify this file directly
// - If you have any questions, please reach out to Alex!!!

export const borderWidths = {
  "1": "1px",
  "0": "0",
  "2": "2px",
  "4": "4px",
  "8": "8px",
};

export const breakpoints = ["640px", "768px", "1024px", "1280px"];

export const baseFonts = {
  sans:
    '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: "inherit",
  monospace: baseFonts.mono,
};

export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "5rem",
  "8xl": "6rem",
  "9xl": "7rem",
  "10xl": "8rem",
  "11xl": "9rem",
};

export const baseFontWeights = {
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export const baseLineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
  "3": ".75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
};

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
};

export const radii = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
};

export const sizes = {
  t: {
    xs: 16,
    sm: 32,
    md: 64,
    lg: 96,
    xl: 128,
    "2xl": 256,
    "-xs": -16,
    "-sm": -32,
    "-md": -64,
    "-lg": -96,
    "-xl": -128,
    "-2xl": -256,
  },

  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  full: "100%",
  screenHeight: "100vh",
  screenWidth: "100vw",

  specialOfferBanner: {
    sm: 60,
    md: 80,
    lg: 80,
    xl: 80,
  },
};

export const shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  none: "none",
};

const space = {
  t: {
    "2xs": 8,
    xs: 16,
    sm: 32,
    md: 64,
    lg: 96,
    xl: 128,
    "2xl": 256,
    "-xs": -16,
    "-sm": -32,
    "-md": -64,
    "-lg": -96,
    "-xl": -128,
    "-2xl": -256,
  },

  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
};

export const zIndices = {
  auto: "auto",
  "0": "0",
  "10": "10",
  "20": "20",
  "30": "30",
  "40": "40",
  "50": "50",
};

export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: "base",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
  },
};

export const theme = {
  borderWidths,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  radii,
  zIndices,
  styles,
};
