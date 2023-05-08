import { Flex, List, Text } from "@chakra-ui/react";
import { TweetCard } from "./TweetCard";

export function TweetsList({ props: { users, isFetching, ...rest } }) {
  if (users.length === 0) {
    return (
      <Text fontWeight={600} fontSize="48px" mb="212px" mt="212px">
        The list is Empty
      </Text>
    );
  }

  return (
    <List mb="36px">
      <Flex gridGap="48px" justifyContent="center" flexWrap="wrap">
        {users.map((user) => {
          return <TweetCard key={user.id} user={user} {...rest} />;
        })}
      </Flex>
    </List>
  );
}

export function makeUniqueArrayByKey({ key, array }) {
  return [...new Map(array.map((item) => [item[key], item])).values()];
}
