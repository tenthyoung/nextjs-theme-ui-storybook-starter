import { theme } from "./theme";
import { buttons } from "./buttons";
import { text } from "./text";
import { colors } from "./colors";

export default {
  ...theme,
  buttons,
  text,
  colors,

  fonts: {
    ...theme.fonts,
    heading: "'BebasNeue', sans-serif",
    body: "'Source Sans Pro', sans-serif",
  },

  layout: {
    container: {
      width: "full",
      maxWidth: ["full", null, null, 1170],
      px: [2, 4],
    },

    checkout: {
      variant: "layout.container",
      maxWidth: ["full", null, null, null, 1920], // 1920px = Macbook Pro 16″ screen width
    },

    cart: {
      variant: "layout.container",
      maxWidth: ["full", null, null, null, "3xl"],
    },

    auth: {
      variant: "layout.container",
      maxWidth: ["full", null, null, "xl"],
    },

    login: {
      variant: "layout.container",
      maxWidth: ["full", null, null, "3xl"],
    },

    trustIcons: {
      variant: "layout.container",
      maxWidth: ["full", null, null, "2xl"],
    },
  },

  styles: {
    ...theme.styles,

    root: {
      ...theme.styles.root,
      "& a": {
        color: "darkGray",
        textDecoration: "none",
      },
    },

    hr: {
      borderColor: "muted",
    },

    a: {
      color: "currentColor",
      textDecoration: "underline",
      ":hover": {
        color: "primary",
      },
    },

    table: {
      borderSpacing: 0,
      borderCollapse: "collapse",
      fontSize: ["xs", "sm"],
      width: "full",
      thead: {
        tr: {
          th: {
            fontFamily: "heading",
            fontSize: ["lg", "xl"],
            px: 3,
            py: 2,
            textAlign: "center",
            width: "1/3",
          },
          "th:not(:first-of-type)": {
            textTransform: "uppercase",
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            borderRightColor: "gray",
            borderRightStyle: "solid",
            borderRightWidth: 1,
          },
          "th:last-of-type": {
            borderRightWidth: 0,
          },
        },
      },
      tbody: {
        fontFamily: "body",
        tr: {
          td: {
            px: 3,
            py: 2,
            textAlign: "center",
            svg: {
              display: "block",
              margin: "0 auto",
            },
          },
          "td:not(:first-of-type)": {
            px: 3,
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            borderRightColor: "gray",
            borderRightStyle: "solid",
            borderRightWidth: 1,
          },
          "td:last-of-type": {
            borderRightWidth: 0,
          },
          "td:first-of-type": {
            textAlign: "right",
          },
        },
      },
    },
  },

  cards: {
    primary: {
      boxShadow: "default",
    },
  },

  forms: {
    label: {
      color: "darkGray",
    },
    input: {
      fontFamily: "body",
      fontSize: "lg",
      borderRadius: 0,
      py: 2,
      px: 4,
      transition: ".1s linear border-color",
      "::placeholder": {
        color: "gray",
      },
      ":disabled": { cursor: "not-allowed", bg: "lighterGray" },
    },
    textarea: {
      fontFamily: "body",
      fontSize: "lg",
      color: "darkerGray",
      px: 4,
      py: 3,
      bg: "white",
      borderRadius: 0,
      borderColor: "gray",
      ":active,:focus": {
        outline: "none",
        borderColor: "black",
      },
      "::placeholder": {
        color: "darkGray",
      },
      ":disabled": { cursor: "not-allowed", bg: "gray.100" },
    },
    error: {
      variant: "forms.input",
      color: "red",
      borderColor: "red",
    },
    select: {
      px: 4,
      fontSize: "lg",
      fontFamily: "heading",
      letterSpacing: "wide",
      borderRadius: 0,
      borderWidth: 1,
      borderColor: "lightGray",
      cursor: "pointer",
      "&:hover": {
        borderColor: "darkGray",
      },
      ":disabled": {
        cursor: "not-allowed",
      },
    },
    inlineSelect: {
      variant: "forms.select",
      pl: 4,
      pr: 8,
      "& + svg": {
        position: "absolute",
        right: 2,
        top: "50%",
        transform: "translateY(-55%)",
      },
    },
  },

  navBar: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightGray",
    borderBottomStyle: "solid",
    background: "white",
    display: "flex",
    position: "relative",
    flex: 1,
    height: 53,
    width: "screenWidth",
    justifyContent: "center",
  },

  links: {
    mobileNavItem: {
      alignItems: "center",
      color: "black",
      cursor: "pointer",
      backgroundColor: "gray.100",
      borderBottomColor: "lightGray",
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      display: "flex",
      flex: 1,
      fontFamily: "heading",
      fontSize: "lg",
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "wide",
      p: 4,
      transition: ".2s linear color, .2s linear background-color ",
      "&[aria-current]": {
        color: "primary",
        ":visited": { color: "primary" },
        ":hover": {
          textDecoration: "none",
        },
      },
      ":visited": { color: "black" },
      ":hover": {
        color: "primary",
        textDecoration: "underline",
        backgroundColor: "lighterGray",
      },
    },
    nav: {
      alignItems: "center",
      color: "black",
      cursor: "pointer",
      display: "inline-flex",
      fontFamily: "heading",
      fontSize: "lg",
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      height: "full",
      letterSpacing: "wide",
      transition: ".2s linear color",
      "&[aria-current]": {
        color: "primary",
        ":visited": { color: "primary" },
        ":hover": {
          textDecoration: "none",
        },
      },
      ":visited": { color: "black" },
      ":hover": {
        color: "primary",
        textDecoration: "underline",
      },
    },
    primary: {
      color: "primary",
    },
  },

  images: {
    flag: {
      width: "24px",
      height: "24px",
      borderRadius: 99999,
    },
  },
};
