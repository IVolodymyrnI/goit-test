import { useQuery } from "react-query";

import { getUsers } from "services/usersApi";

export const useGetUsers = ({ page, filter }) => {
  return useQuery(
    ["users", { page, filter }],
    () => getUsers({ page, filter }),
    {
      keepPreviousData: true,
    }
  );
};
