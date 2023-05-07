import { Button, ButtonGroup } from "@chakra-ui/react";
import { FILTER } from "constants";
const { ALL, FOLLOW, FOLLOWING } = FILTER;

export const FilterByStatus = ({ props: { onClick, filter, isFetching } }) => {
  return (
    <ButtonGroup mb="36px">
      <Button
        name={ALL}
        _hover={{ bg: "brand.active", transform: "scale(1.05)" }}
        layerStyle={filter === ALL ? "active" : "inactive"}
        onClick={onClick}
        isDisabled={isFetching}
      >
        All
      </Button>
      <Button
        name={FOLLOW}
        _hover={{ bg: "brand.active", transform: "scale(1.05)" }}
        layerStyle={filter === FOLLOW ? "active" : "inactive"}
        onClick={onClick}
        isDisabled={isFetching}
      >
        Follow
      </Button>
      <Button
        name={FOLLOWING}
        _hover={{ bg: "brand.active", transform: "scale(1.05)" }}
        layerStyle={filter === FOLLOWING ? "active" : "inactive"}
        onClick={onClick}
        isDisabled={isFetching}
      >
        Following
      </Button>
    </ButtonGroup>
  );
};
