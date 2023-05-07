import { useEffect, useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { useGetUsers } from "hooks";
import { FILTER } from "constants";
import { TweetsList } from "components/TweetsList";
import { FilterByStatus } from "components/FilterByStatus";
import { PaginationTweets } from "components/PaginationTweets";
import { load, save } from "utils";

const { ALL, FOLLOW, FOLLOWING } = FILTER;

const Tweets = () => {
  const [page, setPage] = useState(() => load("page") || 1);
  const [filter, setFilter] = useState(() => load("filter") || ALL);
  const { data: users = [], isFetching } = useGetUsers({ page, filter });
  const ref = useRef(filter);

  useEffect(() => {
    save("filter", filter);

    // When the page is changed, setPage doesn't set "1" as a value, only if the filter is changed.
    if (ref.current !== filter) {
      ref.current = filter;
      setPage(1);
    }
  }, [filter]);

  useEffect(() => {
    save("page", page);
  }, [page]);

  const onPagination = (e) => {
    const buttonName = e.target.name;

    switch (buttonName) {
      case "next":
        setPage((state) => state + 1);
        break;
      case "prev":
        setPage((state) => state - 1);
        break;
      default:
        setPage(1);
    }
  };

  const onFilter = (e) => {
    const buttonName = e.target.name;

    switch (buttonName) {
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

  const paginationProps = {
    onPagination,
    page,
    users,
    isFetching,
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
      <FilterByStatus props={filterProps}></FilterByStatus>
      <TweetsList props={tweetsListProps} />
      <PaginationTweets props={paginationProps} />
    </Flex>
  );
};

export default Tweets;
