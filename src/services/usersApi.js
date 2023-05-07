import axios from "axios";
import { PER_PAGE } from "constants";
import { filterToBoolean } from "utils";

const instance = axios.create({
  baseURL: "https://6454b79ba74f994b3346ffc7.mockapi.io",
});

export const getUsers = async ({ page, filter }) => {
  const filterInBoolean = filterToBoolean(filter);

  try {
    const response = await instance.get("/users", {
      params: { page, limit: PER_PAGE, isFollowing: filterInBoolean },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const putUserById = async ({ id, body }) => {
  try {
    const response = await instance.put(`/users/${id}`, body);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
