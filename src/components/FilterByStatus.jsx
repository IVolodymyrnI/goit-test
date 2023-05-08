import { Select, Box } from "@chakra-ui/react";
import { FILTER } from "constants";

const { ALL, FOLLOW, FOLLOWING } = FILTER;

export const FilterByStatus = ({ props: { onClick, isFetching, filter } }) => {
  return (
    <Box mb="36px">
      <Select size="md" onClick={onClick} isDisabled={isFetching}>
        <option value="all" default={filter === ALL}>
          All
        </option>
        <option value="follow" default={filter === FOLLOW}>
          Follow
        </option>
        <option value="following" default={filter === FOLLOWING}>
          Following
        </option>
      </Select>
    </Box>
  );
};
