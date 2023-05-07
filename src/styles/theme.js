import { extendTheme } from "@chakra-ui/react";

import { textStyles, Button, layerStyles } from "styles";

export const theme = extendTheme({
  fonts: {
    body: "Montserrat, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  colors: {
    brand: {
      main: "#EBD8FF",
      active: "#5CD3A8",
      btnText: "#373737",
    },
  },
  textStyles,
  layerStyles,
  components: {
    Button,
  },
});
