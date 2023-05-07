import { chakra } from "@chakra-ui/react";

export const PhotoFrame = chakra("div", {
  baseStyle: {
    backgroundColor: "brand.main",
    boxShadow:
      "0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF",
    borderRadius: "100%",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
