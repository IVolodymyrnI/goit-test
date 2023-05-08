import { Button, Text } from "@chakra-ui/react";
import { PER_PAGE } from "constants";

export const LoadMoreButton = ({ props }) => {
  const { onPagination, isFetching, data, isSuccess } = props;

  if (data.length < PER_PAGE && isSuccess) {
    return <Text>That's all what we've got!</Text>;
  }

  return (
    <Button
      name="prev"
      layerStyle="inactive"
      _hover={{ transform: "scale(1.05)" }}
      onClick={onPagination}
      isLoading={isFetching}
      isDisabled={isFetching}
    >
      Load More
    </Button>
  );
};
