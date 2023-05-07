import { Button, ButtonGroup } from "@chakra-ui/react";
import { PER_PAGE } from "constants";

export const PaginationTweets = ({ props }) => {
  const { onPagination, page, users, isFetching } = props;

  return (
    <ButtonGroup>
      <Button
        name="prev"
        layerStyle="inactive"
        _hover={{ transform: "scale(1.05)" }}
        onClick={onPagination}
        isDisabled={page === 1 || isFetching}
      >
        Prev
      </Button>
      <Button
        name="next"
        layerStyle="inactive"
        _hover={{ transform: "scale(1.05)" }}
        onClick={onPagination}
        isDisabled={users.length !== PER_PAGE || isFetching}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};
