// 色の定義ファイルはsrc/styles/globals.cssでも管理されています。基本的にはグローバルCSSの色定義を使用してください
const baseColors = {
  PRIMARY: "#2CFFBA",
  SECONDARY: "#43C66F",
  WHITE: "#DCDCE5",
  BLACK: "#151924",
  GRAY: "#464952",
  ATTENTION: "#FA7B05",
  ERROR: "#E61E0A",
} as const;

export const colors = {
  PRIMARY: baseColors.PRIMARY,
  SECONDARY: baseColors.SECONDARY,
  BLACK: baseColors.BLACK,
  WHITE: baseColors.WHITE,
  GRAY: baseColors.GRAY,
  ATTENTION: baseColors.ATTENTION,
  ERROR: baseColors.ERROR,
} as const;
