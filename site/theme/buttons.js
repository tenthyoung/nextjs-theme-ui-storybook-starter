export const buttons = {
  default: {
    py: 2,
    px: 4,
    fontSize: "2xl",
    borderRadius: "none",
    borderStyle: "solid",
    borderWidth: 1,
    textTransform: "uppercase",
    fontFamily: "heading",
    fontWeight: 800,
    letterSpacing: "wider",
    cursor: "pointer",
    transition: "0.2s linear",
    "&:disabled": {
      cursor: "not-allowed",
      color: "darkGray",
      bg: "lightGray",
      borderColor: "lightGray",
      "&:hover": {
        color: "darkGray",
        bg: "lightGray",
        borderColor: "lightGray",
      },
    },
  },

  primary: {
    variant: "buttons.default",
    color: "white",
    bg: "primary",
    borderColor: "primary",
    ":hover": {
      bg: "black",
      borderColor: "black",
    },
  },

  secondary: {
    variant: "buttons.default",
    color: "white",
    bg: "black",
    borderColor: "black",
    ":hover": {
      color: "black",
      bg: "transparent",
    },
  },

  "secondary-outline": {
    variant: "buttons.default",
    color: "black",
    bg: "white",
    borderColor: "black",
    ":hover": {
      color: "white",
      bg: "black",
    },
  },

  ghost: {
    variant: "buttons.default",
    bg: "transparent",
    color: "black",
    borderColor: "transparent",
    ":hover": {
      bg: "lightGray",
      borderColor: "lightGray",
    },
  },

  link: {
    px: "0 !important;",
    py: "0 !important;",
    fontFamily: "body",
    fontSize: "sm",
    color: "darkGray",
    bg: "transparent",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },

  sm: { py: 1, px: 4, fontSize: "base" },
  md: { py: 2, px: 8 },
  lg: { py: 4, px: 16, fontSize: "3xl" },

  icon: {
    borderRadius: "none",
    cursor: "pointer",
    padding: "0px",
    p: "4px",
    width: "32px",
    height: "32px",
    backgroundColor: "transparent",
    ":disabled": {
      cursor: "not-allowed",
      color: "gray",
    },
  },

  close: {
    borderRadius: "none",
    cursor: "pointer",
    padding: "0px",
    p: "4px",
    width: "32px",
    height: "32px",
  },

  menu: {
    borderRadius: "none",
    cursor: "pointer",
    padding: "0px",
    p: "4px",
    width: "32px",
    height: "32px",
  },
};
