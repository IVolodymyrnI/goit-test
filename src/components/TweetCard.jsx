import { usePutUserById } from "hooks";
import {
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Flex,
  ListItem,
  Box,
} from "@chakra-ui/react";

import { decreaseNumber, increaseNumber } from "utils";
import { PhotoFrame } from "components/CustomStyledComponents/PhotoFrame";
import { CustomLine } from "components/CustomStyledComponents/CustomLine";
import { ReactComponent as Logo } from "svg/logo.svg";
import cardBgImage from "images/cardBgImage.png";

export function TweetCard({ user, page, filter }) {
  const { followers, tweets, avatar, isFollowing } = user;
  const { mutate: putUserById, isLoading: isPutting } = usePutUserById({
    page,
    filter,
  });

  const onClick = (user) => {
    const { isFollowing, id } = user;

    if (isFollowing) {
      putUserById({
        id,
        body: {
          ...user,
          followers: decreaseNumber({ baseNum: followers, toSubtract: 1 }),
          isFollowing: false,
        },
      });
      return;
    }

    putUserById({
      id,
      body: {
        ...user,
        followers: increaseNumber({ baseNum: followers, toAdd: 1 }),
        isFollowing: true,
      },
    });
  };

  return (
    <ListItem>
      <Card layerStyle="card" width="380px" height="460px">
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="end"
          alignItems="center"
          padding="0px"
        >
          <Box pos="absolute" top="20px" left="20px">
            <Logo />
          </Box>
          <Box bgImage={`url(${cardBgImage})`} width="308px" height="168px" />
          <Flex mb="26px">
            <CustomLine />
            <PhotoFrame>
              <Image
                src={avatar}
                alt="user's avatar"
                boxSize="62px"
                borderRadius="50%"
              />
            </PhotoFrame>
            <CustomLine />
          </Flex>
          <Text textStyle="cardText" mb="16px">
            followers {followers}
          </Text>
          <Text textStyle="cardText" mb="26px">
            tweets {tweets}
          </Text>
          <Button
            isLoading={isPutting}
            isDisabled={isPutting}
            textStyle="btnText"
            variant="followBtn"
            layerStyle={isFollowing ? "active" : "inactive"}
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => onClick(user)}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </CardBody>
      </Card>
    </ListItem>
  );
}
