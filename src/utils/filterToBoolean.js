import { FILTER } from "constants";
const { ALL, FOLLOW, FOLLOWING } = FILTER;

export const filterToBoolean = (value) => {
  if (value === ALL) {
    return null;
	}

  if (value === FOLLOW) {
    return false;
	}

  if (value === FOLLOWING) {
    return true;
  }
};
