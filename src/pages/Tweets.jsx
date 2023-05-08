import { useEffect, useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { useGetUsers } from "hooks";
import { FILTER } from "constants";
import { TweetsList } from "components/TweetsList";
import { FilterByStatus } from "components/FilterByStatus";
import { LoadMoreButton } from "components/LoadMoreButton";
import { unifyUsers } from "utils/unifyUsers";
import { BackButton } from "components/BackButton";

const { ALL, FOLLOW, FOLLOWING } = FILTER;

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(ALL);
  const { data = [], isFetching, isSuccess } = useGetUsers({ page, filter });
  const [users = [], setUsers] = useState([]);
  const ref = useRef({ filter, page });

  useEffect(() => {
    if (page === 1) {
      setUsers(data);
    }

    setUsers((state) => {
      return unifyUsers({
        key: "id",
        arrays: [state, data],
      });
    });
  }, [data, filter, page]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const onPagination = () => {
    setPage((state) => state + 1);
    ref.current.page = page;
  };

  const onFilter = ({ target }) => {
    const value = target.value;
    ref.current.filter = filter;

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

  const tweetsListProps = {
    users,
    page,
    filter,
    isFetching,
  };

  const filterProps = {
    onClick: onFilter,
    filter,
    isFetching,
  };

  return (
    <Flex flexDir="column" justify="center" align="center">
      <BackButton />
      <FilterByStatus props={filterProps}></FilterByStatus>
      <TweetsList props={tweetsListProps} />
      <LoadMoreButton props={loadMoreProps} />
    </Flex>
  );
};

export default Tweets;
