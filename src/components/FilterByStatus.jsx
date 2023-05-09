import { Select, Box } from "@chakra-ui/react";

export const FilterByStatus = ({ props: { onChange, isFetching, filter } }) => {
  return (
    <Box mb="36px">
      <Select
        size="md"
        onChange={onChange}
        defaultValue={filter}
        isDisabled={isFetching}
      >
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
    </Box>
  );
};
