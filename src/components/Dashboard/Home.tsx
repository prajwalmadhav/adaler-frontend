import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Icon,
} from "@chakra-ui/react";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Ma = () => {
  return (
    <><Flex
      bg={useColorModeValue("grey.500", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article" />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Product
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}

            >
              I Built A Successful Blog In One Year
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar" />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}

                >
                  Jone Doe
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
      {/*  2nd box  */}
      <Flex
        bg={useColorModeValue("grey.500", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg={useColorModeValue("white", "gray.800")}
          maxW="2xl"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article" />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color={useColorModeValue("brand.600", "brand.400")}
              >
                Product
              </chakra.span>
              <Link
                display="block"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}

              >
                I Built A Successful Blog In One Year
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                parturient et sem ipsum volutpat vel. Natoque sem et aliquam
                mauris egestas quam volutpat viverra. In pretium nec senectus
                erat. Et malesuada lobortis.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar" />
                  <Link
                    mx={2}
                    fontWeight="bold"
                    color={useColorModeValue("gray.700", "gray.200")}

                  >
                    Jone Doe
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  21 SEP 2015
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
      
      {/* 3rd box */}

      function Cards(){
  
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdHeadset} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Focusing
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Patterson johnson
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
            Full Stack maker & UI / UX Designer , love hip hop music Author of
            Building UI.
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={BsFillBriefcaseFill}
              
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Choc UI
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              California
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              patterson@example.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
  
};

    
      
    </>
  );
};


export default Ma;


