import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  variants: {
    filterBtn: {
      margin: "auto",
      width: "120px",
      height: "50px",
      backgroundColor: "brand.main",
    },
    followBtn: {
      width: "196px",
      height: "50px",
      marginBottom: "36px",
    },
  },
});
