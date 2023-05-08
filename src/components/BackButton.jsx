import { Button, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link as={RouteLink} alignSelf="start" pl="40px" to="/">
      <Button
        name="prev"
        layerStyle="inactive"
        _hover={{ transform: "scale(1.05)" }}
      >
        Back
      </Button>
    </Link>
  );
};
