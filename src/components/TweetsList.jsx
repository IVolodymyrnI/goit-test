import { Flex, List, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { TweetCard } from "./TweetCard";

export function TweetsList({ props: { users, isFetching, ...rest } }) {
  if (isFetching) {
    return <Spinner size="xl" mb="225px" mt="225px" />;
  }

  if (users.length === 0) {
    return (
      <Text fontWeight={600} fontSize="48px" mb="212px" mt="212px">
        The list is Empty
      </Text>
    );
  }

  return (
    <List mb="36px">
      <Flex columnGap="48px" justifyContent="center">
        {users.map((user) => {
          return <TweetCard key={user.id} user={user} {...rest} />;
        })}
      </Flex>
    </List>
  );
}
