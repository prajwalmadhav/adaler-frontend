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
import { MdHeadset, MdEmail, MdLocationOn} from "react-icons/md";
import { TimeIcon,CalendarIcon, InfoIcon, EditIcon } from '@chakra-ui/icons'

import { BsFillBriefcaseFill } from "react-icons/bs";

const Ma = () => {
  return (
    <>      
      {/* All box */}
    <Flex
      ml = {{ base: 0, md: 20, lg: 12 }}
      justifyContent = {{ base: "", lg: "center" }}
      px = {4}
      >   
      <Flex
        bg={("#FFFFFF")}
        p={50}
        w="80%"
        h = ""
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "column", lg: "row" }}
        py = {{ base: 4, md: 4, lg: 4 }}
        px = {10}
        //pos={'absolute'}
        right = "20px"
      >
        {/* CARD 1 */}
        
        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          height = "22rem"
          width = "18rem"
        >
          <Image
            h="8rem"
            w = "18rem"
            fit="fill"
            objectPosition="center"
            src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
            alt="avatar"

          />

          <Flex alignItems="center" px={5} py={3} bg="gray.900" height = '2rem'>
            <Icon as={CalendarIcon} h={4} w={6} color="white" />

            <chakra.h1 mx={2} color="white" fontWeight="bold" fontSize="md">
              2 Weeks
            </chakra.h1>
          </Flex>

          <Box
          py={2}
          px={6}
          overflow="visible"  
          >
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Introduction to Programming
            </chakra.h1>

            <chakra.p py={2} lineHeight="1.2" color={useColorModeValue("gray.700", "gray.400")}>
              Get started with basics of programming and learn to code
            </chakra.p>

            <Flex
              alignItems="center"
              mt={1}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon
                as={BsFillBriefcaseFill}
                h={4}
                w={4}
                mr={1}
              />

              <chakra.h1 px={2} py = {-1} fontSize="sm">
               Beginner
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={2}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={TimeIcon} h={4} w={4} mr={1} />

              <chakra.h1 px={2} fontSize="sm">
                5 Modules
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={2}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={EditIcon} h={4} w={4} mr={1} />

              <chakra.h1 px={2} fontSize="sm">
                20 Tests
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
        <br />
        {/* CARD 2 */}
        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          height = "22rem"
          width = "18rem"
        >
          <Image
            h="8rem"
            w = "18rem"
            fit="fill"
            objectPosition="center"
            src="https://files.realpython.com/media/python-beginner-tips.50f5f0c4e739.jpg"
            alt="avatar"

          />

          <Flex alignItems="center" px={5} py={3} bg="gray.900" height = '2rem'>
            <Icon as={CalendarIcon} h={4} w={6} color="white" />

            <chakra.h1 mx={2} color="white" fontWeight="bold" fontSize="md">
              2 Weeks
            </chakra.h1>
          </Flex>

          <Box
          py={2}
          px={6}
          overflow="visible"  
          >
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Advanced Python
            </chakra.h1>

            <chakra.p py={2} lineHeight="1.2" color={useColorModeValue("gray.700", "gray.400")}>
              Get started with basics of programming and learn to code
            </chakra.p>

            <Flex
              alignItems="center"
              mt={1}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon
                as={BsFillBriefcaseFill}
                h={4}
                w={4}
                mr={1}
              />

              <chakra.h1 px={2} py = {-1} fontSize="sm">
               Beginner
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={2}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={TimeIcon} h={4} w={4} mr={1} />

              <chakra.h1 px={2} fontSize="sm">
                5 Modules
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={2}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={EditIcon} h={4} w={4} mr={1} />

              <chakra.h1 px={2} fontSize="sm">
                20 Tests
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
        <br />
        {/* CARD 3 */}
        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          height = "22rem"
          width = "18rem"
        >
          <Image
            h="8rem"
            w = "18rem"
            fit="fill"
            objectPosition="center"
            src="https://content.techgig.com/thumb/msid-79468180,width-860,resizemode-4/7-Hacks-to-become-a-better-Java-problem-solver.jpg?77507"
            alt="avatar"

          />

          <Flex alignItems="center" px={5} py={3} bg="gray.900" height = '2rem'>
            <Icon as={CalendarIcon} h={4} w={6} color="white" />

            <chakra.h1 mx={2} color="white" fontWeight="bold" fontSize="md">
              2 Weeks
            </chakra.h1>
          </Flex>

          <Box
          py={2}
          px={6}
          overflow="visible"  
          >
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Advanced Java
            </chakra.h1>

            <chakra.p py={2} lineHeight="1.2" color={useColorModeValue("gray.700", "gray.400")}>
              Lorem ipsum dolor sit amet, consectetur adip elit 
            </chakra.p>

            <Flex
              alignItems="center"
              mt={1}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon
                as={BsFillBriefcaseFill}
                h={4}
                w={4}
                mr={1}
              />

              <chakra.h1 px={2} py = {-1} fontSize="sm">
               Beginner
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={2}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={TimeIcon} h={4} w={4} mr={1} />

              <chakra.h1 px={2} fontSize="sm">
                5 Modules
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={2}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={EditIcon} h={4} w={4} mr={1} />

              <chakra.h1 px={2} fontSize="sm">
                20 Tests
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
        
      </Flex>
    </Flex> 
  


    
      
    </>
  );
};


export default Ma;

