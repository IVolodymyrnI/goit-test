import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { useGetUsers } from "hooks";
import { FILTER } from "constants";
import { TweetsList } from "components/TweetsList";
import { FilterByStatus } from "components/FilterByStatus";
import { LoadMoreButton } from "components/LoadMoreButton";
import { BackButton } from "components/BackButton";
import { load, save } from "utils";

const { ALL, FOLLOW, FOLLOWING } = FILTER;

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(() => load("filter") || ALL);
  const { data = [], isFetching, isSuccess } = useGetUsers({ page, filter });
  const [users = [], setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState();

  useEffect(() => {
    if (page === 1) {
      setUsers(data);
    } else {
      setUsers((state) => [...state, ...data]);
    }
  }, [data, page]);

  useEffect(() => {
    setUsers((state) => {
      return state.map((oldUser) =>
        oldUser.id === updatedUser?.id ? updatedUser : oldUser
      );
    });
  }, [updatedUser]);

  const onPagination = () => {
    setPage((state) => state + 1);
  };

  const onFollow = (user) => {
    setUpdatedUser(user);
  };

  const onFilter = ({ target }) => {
    const value = target.value;
    setPage(1);
    save("filter", value);

    switch (value) {
      case FOLLOW:
        setFilter(FOLLOW);
        break;
      case FOLLOWING:
        setFilter(FOLLOWING);
        break;
      default:
        setFilter(ALL);
    }
  };

  const loadMoreProps = {
    onPagination,
    isFetching,
    data,
    isSuccess,
  };

  const filterProps = {
    onChange: onFilter,
    isFetching,
    filter,
  };

  return (
    <Flex flexDir="column" justify="center" align="center">
      <BackButton />
      <FilterByStatus props={filterProps}></FilterByStatus>
      <TweetsList users={users} onFollow={onFollow} />
      <LoadMoreButton props={loadMoreProps} />
    </Flex>
  );
};

export default Tweets;
