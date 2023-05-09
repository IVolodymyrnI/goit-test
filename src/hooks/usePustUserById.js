import { useMutation } from "react-query";

import { putUserById } from "services/usersApi";

export const usePutUserById = () => {
  return useMutation(putUserById);
};
