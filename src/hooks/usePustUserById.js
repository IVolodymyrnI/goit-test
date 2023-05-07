import { useMutation, useQueryClient } from "react-query";

import { putUserById } from "services/usersApi";

export const usePutUserById = ({ page, filter }) => {
  const queryClient = useQueryClient();

  return useMutation(putUserById, {
    onMutate: async ({ body: newData }) => {
      await queryClient.cancelQueries(["users", { page, filter }]);
      const previousUsers = queryClient.getQueryData([
        "users",
        { page, filter },
      ]);

      queryClient.setQueryData(["users", { page, filter }], (oldData) => {
        return oldData.map((user) => (newData.id === user.id ? newData : user));
      });

      return { previousUsers, newData };
    },

    onError: (err, newData, context) => {
      queryClient.setQueryData(
        ["users", { filter, page }],
        context.previousUsers
      );
    },

    // onSettled: () => {
    //   queryClient.invalidateQueries(["users", { page, filter }]);
    // },
  });
};
