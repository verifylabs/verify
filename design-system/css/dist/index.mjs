var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../common/config/react-imports.js
import * as React from "react";

// src/index.ts
import { default as default2 } from "classnames";

// src/colors.ts
import * as radixColors from "@radix-ui/colors";
var base = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  brand: "#58c09b",
  ...radixColors.blackA,
  ...radixColors.whiteA
};
var lightColors = {
  ...base,
  ...radixColors.tomato,
  ...radixColors.red,
  ...radixColors.crimson,
  ...radixColors.pink,
  ...radixColors.plum,
  ...radixColors.purple,
  ...radixColors.violet,
  ...radixColors.indigo,
  ...radixColors.blue,
  ...radixColors.cyan,
  ...radixColors.teal,
  ...radixColors.green,
  ...radixColors.grass,
  ...radixColors.orange,
  ...radixColors.brown,
  ...radixColors.sky,
  ...radixColors.mint,
  ...radixColors.lime,
  ...radixColors.yellow,
  ...radixColors.amber,
  ...radixColors.gold,
  ...radixColors.bronze,
  gray1: radixColors.slate.slate1,
  gray2: radixColors.slate.slate2,
  gray3: radixColors.slate.slate3,
  gray4: radixColors.slate.slate4,
  gray5: radixColors.slate.slate5,
  gray6: radixColors.slate.slate6,
  gray7: radixColors.slate.slate7,
  gray8: radixColors.slate.slate8,
  gray9: radixColors.slate.slate9,
  gray10: radixColors.slate.slate10,
  gray11: radixColors.slate.slate11,
  gray12: radixColors.slate.slate12,
  accent1: radixColors.mint.mint1,
  accent2: radixColors.mint.mint2,
  accent3: radixColors.mint.mint3,
  accent4: radixColors.mint.mint4,
  accent5: radixColors.mint.mint5,
  accent6: radixColors.mint.mint6,
  accent7: radixColors.mint.mint7,
  accent8: radixColors.mint.mint8,
  accent9: radixColors.mint.mint9,
  accent10: radixColors.mint.mint10,
  accent11: radixColors.mint.mint11,
  accent12: radixColors.mint.mint12,
  bodyColor: "#F5F6F7",
  textColor: "$gray11",
  borderColor: "$gray5",
  borderHover: "$gray7",
  inputBg: "$gray1",
  inputColor: "$gray11",
  inputBorder: "$gray6",
  inputPlaceholderColor: "$gray9"
};
var darkColors = {
  ...base,
  ...radixColors.tomatoDark,
  ...radixColors.redDark,
  ...radixColors.crimsonDark,
  ...radixColors.pinkDark,
  ...radixColors.plumDark,
  ...radixColors.purpleDark,
  ...radixColors.violetDark,
  ...radixColors.indigoDark,
  ...radixColors.blueDark,
  ...radixColors.cyanDark,
  ...radixColors.tealDark,
  ...radixColors.greenDark,
  ...radixColors.grassDark,
  ...radixColors.orangeDark,
  ...radixColors.brownDark,
  ...radixColors.skyDark,
  ...radixColors.mintDark,
  ...radixColors.limeDark,
  ...radixColors.yellowDark,
  ...radixColors.amberDark,
  ...radixColors.goldDark,
  ...radixColors.bronzeDark,
  gray1: radixColors.slateDark.slate1,
  gray2: radixColors.slateDark.slate2,
  gray3: radixColors.slateDark.slate3,
  gray4: radixColors.slateDark.slate4,
  gray5: radixColors.slateDark.slate5,
  gray6: radixColors.slateDark.slate6,
  gray7: radixColors.slateDark.slate7,
  gray8: radixColors.slateDark.slate8,
  gray9: radixColors.slateDark.slate9,
  gray10: radixColors.slateDark.slate10,
  gray11: radixColors.slateDark.slate11,
  gray12: radixColors.slateDark.slate12,
  accent1: radixColors.mintDark.mint1,
  accent2: radixColors.mintDark.mint2,
  accent3: radixColors.mintDark.mint3,
  accent4: radixColors.mintDark.mint4,
  accent5: radixColors.mintDark.mint5,
  accent6: radixColors.mintDark.mint6,
  accent7: radixColors.mintDark.mint7,
  accent8: radixColors.mintDark.mint8,
  accent9: radixColors.mintDark.mint9,
  accent10: radixColors.mintDark.mint10,
  accent11: radixColors.mintDark.mint11,
  accent12: radixColors.mintDark.mint12,
  bodyColor: "#101112",
  textColor: "$gray11",
  borderColor: "$bodyColor",
  borderHover: "$gray5",
  inputBg: "$gray2",
  inputColor: "$gray12",
  inputBorder: "transparent",
  inputPlaceholderColor: "$gray9"
};
var colorKeys = [
  "gray",
  "accent",
  "tomato",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "grass",
  "orange",
  "brown",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
  "gold",
  "bronze"
];
var allColors = Object.keys(lightColors);
function isBright(color) {
  return Boolean(color.match(/gray|accent|mint|sky|lime|yellow|amber/));
}

// src/theme.ts
import { createStitches } from "@stitches/react";

// src/media.ts
var media = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)"
};

// src/tokens.ts
var tokens_exports = {};
__export(tokens_exports, {
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  letterSpacings: () => letterSpacings,
  lineHeights: () => lineHeights,
  radii: () => radii,
  shadows: () => shadows,
  sizes: () => sizes,
  space: () => space,
  zIndices: () => zIndices
});
var space = {
  0: "0px",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
var sizes = {
  ...space,
  auto: "auto",
  none: "none",
  0: "0rem",
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
  "7xl": "80rem",
  full: "100%",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  screenW: "100vw",
  screenH: "100vh"
};
var fonts = {
  sans: '"Satoshi", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  display: '"Satoshi", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  heading: '"General Sans", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif'
};
var fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
};
var fontWeights = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
};
var letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
};
var lineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem"
};
var radii = {
  none: "0px",
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.15)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -4px rgb(0 0 0 / 0.15)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "none"
};
var zIndices = {
  auto: "auto",
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50"
};

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  bblr: () => bblr,
  bbrr: () => bbrr,
  bg: () => bg,
  boxSize: () => boxSize,
  br: () => br,
  btlr: () => btlr,
  btrr: () => btrr,
  h: () => h,
  is: () => is,
  linearGradient: () => linearGradient,
  m: () => m,
  maxH: () => maxH,
  maxW: () => maxW,
  mb: () => mb,
  minH: () => minH,
  minW: () => minW,
  ml: () => ml,
  mr: () => mr,
  mt: () => mt,
  mx: () => mx,
  my: () => my,
  p: () => p,
  pb: () => pb,
  pl: () => pl,
  pr: () => pr,
  pt: () => pt,
  px: () => px,
  py: () => py,
  spaceX: () => spaceX,
  spaceY: () => spaceY,
  textSize: () => textSize,
  w: () => w
});

// src/helpers/composeUtil.ts
function composeUtil(props) {
  return (value) => props.reduce((obj, prop) => ({ ...obj, [prop]: value }), {});
}

// src/utils/background.ts
var bg = composeUtil(["backgroundColor"]);
var linearGradient = (value) => ({
  backgroundImage: `linear-gradient(${value})`
});

// src/utils/borderRadius.ts
var br = composeUtil(["borderRadius"]);
var btlr = composeUtil(["borderTopLeftRadius"]);
var btrr = composeUtil(["borderTopRightRadius"]);
var bbrr = composeUtil(["borderBottomRightRadius"]);
var bblr = composeUtil(["borderBottomLeftRadius"]);

// src/mixins/index.ts
var mixins_exports = {};
__export(mixins_exports, {
  centered: () => centered,
  noAppearance: () => noAppearance,
  truncate: () => truncate
});

// src/mixins/layout.ts
var centered = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var noAppearance = {
  appearance: "none",
  border: "none",
  background: "transparent",
  boxShadow: "none"
};

// src/mixins/text.ts
var truncate = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

// src/utils/is.ts
var is = (list) => list.reduce((obj, key) => ({ ...obj, ...mixins_exports[key] }), {});

// src/utils/layout.ts
var w = composeUtil(["width"]);
var minW = composeUtil(["minWidth"]);
var maxW = composeUtil(["maxWidth"]);
var h = composeUtil(["height"]);
var minH = composeUtil(["minHeight"]);
var maxH = composeUtil(["maxHeight"]);
var boxSize = composeUtil(["width", "height"]);
var spaceX = (value) => ({
  "& > * + *": {
    marginLeft: value
  }
});
var spaceY = (value) => ({
  "& > * + *": {
    marginTop: value
  }
});

// src/utils/margin.ts
var m = composeUtil([
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight"
]);
var mt = composeUtil(["marginTop"]);
var mr = composeUtil(["marginRight"]);
var mb = composeUtil(["marginBottom"]);
var ml = composeUtil(["marginLeft"]);
var mx = composeUtil(["marginLeft", "marginRight"]);
var my = composeUtil(["marginTop", "marginBottom"]);

// src/utils/padding.ts
var p = composeUtil([
  "paddingTop",
  "paddingBottom",
  "paddingRight",
  "paddingLeft"
]);
var pt = composeUtil(["paddingTop"]);
var pr = composeUtil(["paddingRight"]);
var pb = composeUtil(["paddingBottom"]);
var pl = composeUtil(["paddingLeft"]);
var px = composeUtil(["paddingLeft", "paddingRight"]);
var py = composeUtil(["paddingTop", "paddingBottom"]);

// src/utils/textSize.ts
var TEXT_SIZE_MAP = {
  xs: ["0.75rem", "1rem"],
  sm: ["0.875rem", "1.25rem"],
  base: ["1rem", "1.5rem"],
  lg: ["1.125rem", "1.75rem"],
  xl: ["1.25rem", "1.75rem"],
  "2xl": ["1.5rem", "2rem"],
  "3xl": ["1.875rem", "2.25rem"],
  "4xl": ["2.25rem", "2.5rem"],
  "5xl": ["3rem", "1"],
  "6xl": ["3.75rem", "1"],
  "7xl": ["4.5rem", "1"],
  "8xl": ["6rem", "1"],
  "9xl": ["8rem", "1"]
};
var textSize = (value) => ({
  fontSize: TEXT_SIZE_MAP[value][0],
  lineHeight: TEXT_SIZE_MAP[value][1]
});
textSize.__keys = Object.keys(TEXT_SIZE_MAP);

// src/theme.ts
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    ...tokens_exports,
    colors: darkColors
  },
  media,
  utils: utils_exports
});
function cssObj(opts) {
  return opts;
}
var lightTheme = createTheme("fuel__light-theme", {
  colors: lightColors
});
var darkTheme = createTheme("fuel__dark-theme", {
  colors: darkColors
});
export {
  allColors,
  base,
  colorKeys,
  config,
  createTheme,
  css,
  cssObj,
  default2 as cx,
  darkColors,
  darkTheme,
  getCssText,
  globalCss,
  isBright,
  keyframes,
  lightColors,
  lightTheme,
  styled,
  theme,
  tokens_exports as tokens,
  utils_exports as utils
};
//# sourceMappingURL=index.mjs.map