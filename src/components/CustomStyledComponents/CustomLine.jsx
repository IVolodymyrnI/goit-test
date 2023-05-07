import { chakra } from "@chakra-ui/react";

export const CustomLine = chakra("div", {
  baseStyle: {
    alignSelf: "center",
    height: "8px",
    width: "calc((380px - 80px) / 2)",
    backgroundColor: "brand.main",
    boxShadow:
      " 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
  },
});
