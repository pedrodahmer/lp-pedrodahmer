import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "var(--font-open_sans)",
  body: "var(--font-open_sans)",
};

const styles = {
  global: {
    body: {
      bg: "#181818",
      color: "#fff",
    },
  },
};

const colors = {
  gray: {
    900: "#181818",
  },
  green: {
    500: "#66E07A",
    300: "#B2E0BA",
  },
  purple: {
    500: "#9167E0",
  },
  blue: {
    500: "#677FE0",
  },
  pink: {
    500: "#E06780",
  },
};

export const theme = extendTheme({
  fonts,
  styles,
  colors,
});
