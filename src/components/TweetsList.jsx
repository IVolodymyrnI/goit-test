import { Flex, List, Text } from "@chakra-ui/react";

import { TweetCard } from "./TweetCard";
import { unifyUsers } from "utils";

export function TweetsList({ users, ...rest }) {
  const unifiedUsers = unifyUsers(users, "id");

  if (unifiedUsers.length === 0) {
    return (
      <Text fontWeight={600} fontSize="48px" mb="212px" mt="212px">
        The list is Empty
      </Text>
    );
  }

  return (
    <List mb="36px">
      <Flex gridGap="48px" justifyContent="center" flexWrap="wrap">
        {unifiedUsers.map((user) => {
          return <TweetCard key={user.id} user={user} {...rest} />;
        })}
      </Flex>
    </List>
  );
}
