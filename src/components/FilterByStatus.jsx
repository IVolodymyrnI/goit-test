import { Select, Box } from "@chakra-ui/react";

export const FilterByStatus = ({ onChange, isFetching }) => {
  return (
    <Box mb="36px">
      <Select size="md" onChange={onChange} isDisabled={isFetching}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
    </Box>
  );
};
