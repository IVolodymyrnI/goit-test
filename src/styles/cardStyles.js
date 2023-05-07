import { defineStyleConfig } from "@chakra-ui/react";

export const Card = defineStyleConfig({
  variants: {
    classic: {
      backgroundColor:
        "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
      boxShadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
      borderRadius: "20px",
    },
  },
  defaultProps: {
    variant: "classic",
  },
});
