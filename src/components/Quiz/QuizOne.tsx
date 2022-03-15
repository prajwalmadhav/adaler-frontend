import React, { useState } from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  Code,
} from "@chakra-ui/react";

export default function Sj() {

  const question = 'This is a demo question which is asked for testing which is asked ?'     //added editable variables
  
  return (

    <Stack >

        <Flex
          justify="center"
          bg={useColorModeValue("gray.200", "gray.800")}
          w="full"
          p={3}
          alignItems="center"
          justifyContent="center"
          ml={{ base: 0, md: "10%", lg: "7.5%" }}
        >
          <Box
            w={{ base: "full", md: "75%", lg: "50%" }}
            px={4}
            py={20}
            textAlign={{ base: "left", lg: "center" }}
          >
            <chakra.span
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              textAlign="center"
              color={useColorModeValue("gray.900", "gray.100")}
              mb={6}
            >
              <chakra.span display="block">{question}</chakra.span>
            </chakra.span>
          </Box>
        </Flex>

    </Stack>
  );
}
