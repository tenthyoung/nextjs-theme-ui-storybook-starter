export const text = {
  // Text
  text: {
    color: "darkGray",
    fontFamily: "body",
  },

  p: {
    variant: "text.text",
    fontSize: "sm",
  },

  headingText: {
    variant: "text.text",
    fontFamily: "heading",
    fontSize: "lg",
    letterSpacing: "wide",
  },

  small: {
    variant: "text.text",
    fontSize: "xs",
  },

  // Headings
  heading: {
    color: "black",
    fontFamily: "heading",
    textTransform: "uppercase",
  },

  h1: { variant: "text.heading", fontSize: "5xl" },
  h2: { variant: "text.heading", fontSize: "4xl" },
  h3: { variant: "text.heading", fontSize: "3xl" },
  h4: { variant: "text.heading", fontSize: "2xl" },
  h5: { variant: "text.heading", fontSize: "xl" },
  h6: { variant: "text.heading", fontSize: "lg" },

  // Product Section
  productTitle: {
    variant: "text.heading",
    fontSize: "5xl",
    fontWeight: 800,
    lineHeight: "none",
    mb: 2,
  },
  productMeta: {
    variant: "text.heading",
    fontSize: "xl",
    fontWeight: 600,
    letterSpacing: "wide",
    lineHeight: "tight",
  },
  productPrice: {
    variant: "text.heading",
    fontSize: "4xl",
    fontWeight: 600,
    letterSpacing: "wide",
  },
  productDescription: {
    fontSize: "base",
    color: "darkGray",
  },

  // Product Order Accordion
  price: {
    variant: "text.heading",
    mt: -3,
    fontSize: "lg",
  },
  comparePrice: {
    fontWeight: "normal",
  },
  priceNote: {
    color: "primary",
    fontWeight: "bold",
  },
};
