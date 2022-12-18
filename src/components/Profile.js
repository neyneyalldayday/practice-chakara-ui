import React from "react";
import {
  Box,
  Flex,
  Heading,
  useMediaQuery,
  Text,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import {DICodeigniter, DiAndroid, DiWebplatform, DiCodeigniter} from 'react-icons/di'

// import { DiAndroid } from 'react-icons/fa'

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          i dance
        </Heading>

        <Text fonstSize="2xl" color={isDark ? "gray.200" : "gray.600"}>
          pay me
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text
          fontWeight="bold"
          fonstSize="2xl"
          color={isDark ? "gray.200" : "gray.600"}
        >
          stuff about btown
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              kitys
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{bg: "teal.400"}}
          >
            <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              clothes
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{bg: "green.400"}}
          >
            <Icon color="white" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              and ill shit
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
