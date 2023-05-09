import { useQuery } from "react-query";

import { getUsers } from "services/usersApi";

export const useGetUsers = ({ page, filter }) => {
  return useQuery({
    queryKey: ["users", { filter, page }],
    queryFn: () => getUsers({ page, filter }),
    cacheTime: 0,
  });
};
