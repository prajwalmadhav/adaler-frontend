import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Icon,
  VStack,
  SimpleGrid,
  Heading,
  Divider,
  Stack,
  Center,
} from "@chakra-ui/react";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";


const Home = () => {
  return (
    <>      
      {/* All cards */} 
      <Heading as='h2' size='xl' 
      ml = {{ base: '25px', md: 20, lg: '300px' }}
      mt = {{ base: '15px'}} >
         |My Courses
      </Heading> 
      <br/>
      
    
      
      
      {/* course cards row 1 */}
      <Flex
      ml = {{ base: 0, md: 20, lg: '18%' }}
      mx = {{ base: 1 }}
      // my = {{ base : 0, lg : 10 }}
      justifyContent = {{ base: "", lg: "center" }}
      px = {4}
      direction={{ base: "column", md: "column", lg: "row" }}
      py = {{ base: 4, md: 4, lg: 4 }}
      >   
        {/* box 1 */}
        
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

      </Flex>

      {/* course cards row 2 */}

      <Flex
      ml = {{ base: 0, md: 20, lg: '18%' }}
      mx = {{ base: 1 }}
      justifyContent = {{ base: "", lg: "center" }}
      px = {4}
      direction={{ base: "column", md: "column", lg: "row" }}
      py = {{ base: 4, md: 4, lg: 4 }}
      >   
        {/* box 1 */}
            
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
        </Box>
          

          {/* box 3 */}
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

      </Flex>

      
      <Heading as='h2' size='xl' ml =  {{base:'25px', md: 20, lg: '300px' }} >
          |My Test
      </Heading> 
      <br/>
      {/* <Divider orientation='horizontal' ml='280px'/> */}

      {/* test cards row 3 */}
      <Flex
      ml = {{ base: 0, md: 20, lg: '18%' }}
      mx = {{ base: 1 }}
      // my = {{ base : 0, lg : 10 }}
      justifyContent = {{ base: "", lg: "center" }}
      px = {4}
      direction={{ base: "column", md: "column", lg: "row" }}
      py = {{ base: 4, md: 4, lg: 4 }}
      >   
        {/* box 1 */}
        
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

      </Flex>

      {/* course cards row 4 */}
      <Flex
      ml = {{ base: 0, md: 20, lg: '18%' }}
      mx = {{ base: 1 }}
      // my = {{ base : 0, lg : 10 }}
      justifyContent = {{ base: "", lg: "center" }}
      px = {4}
      direction={{ base: "column", md: "column", lg: "row" }}
      py = {{ base: 4, md: 4, lg: 4 }}
      >   
        {/* box 1 */}
        
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src="https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={MdHeadset} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics Of Python 
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
                  Time taken 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  tests
                  </chakra.h1>
                </Flex>
              
            </Box>
          </Box>
          

      </Flex>
    


    </>
  );
};


export default Home;