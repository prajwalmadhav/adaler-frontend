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


import { useNavigate } from "react-router-dom"
import { FaRegBookmark, FaRegClock } from "react-icons/fa";
import {BsFillAwardFill} from "react-icons/bs";

const Home = () => {
  const CourseImage1 = "https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
  const CourseImage2 = " https://miro.medium.com/max/875/0*emfQ_cKXSeCdPgb9.jpg"
  const CourseImage3 = " https://miro.medium.com/max/875/0*D9HAiv-jW-9kC76O.jpg"
  const CourseImage4 = "https://miro.medium.com/max/875/0*lrHnHevmk9JPrH86.jpg"
  const CourseImage5 = "https://miro.medium.com/max/875/0*OIp556t9Xtn3Sb7w.jpg"
  const CourseImage6 = "https://miro.medium.com/max/875/0*iO57Y2-H8kwVqW4n.jpg"
  const TestImage1 = "https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?t=st=1648559281~exp=1648559881~hmac=abfbe49f621ebbf67c5877aa964e89748991faea38bd8f954e23a6812c371d2e&w=1060 "
  const TestImage2 = " https://img.freepik.com/free-vector/software-code-testing-concept-illustration_114360-8194.jpg?t=st=1648559431~exp=1648560031~hmac=6a0fa9210d2e34a6975fb61186aa671c8da9e9657df3e6b4890cbcf8205697fc&w=996"
  const TestImage3 = "https://img.freepik.com/free-vector/software-tester-concept-application-website-code-testing_277904-17513.jpg?w=996"
  const TestImage4 = " https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?t=st=1648559309~exp=1648559909~hmac=e8c211e489d696b5ce33e048f3b8dd6e1c25557f0d291bcc5f2eb8523fd9d6d5&w=996"
  const TestImage5 = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1648559233~exp=1648559833~hmac=4cc43979793175bbb32dc4370561743043be7f04d36517d281bba8847c8d9ce3&w=996"
  const TestImage6 = "https://img.freepik.com/free-vector/mobile-testing-concept-illustration_114360-2449.jpg?w=740 "
  const navigate = useNavigate()
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
            onClick={()=>{
              navigate( "/home/courses/course1")
            }}
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
              src={CourseImage1}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Basics of Programming 
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
        onClick={()=>{
          navigate( "/home/courses/course2")
        }}
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
              src={CourseImage2}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
          onClick={()=>{
            navigate( "/home/courses/course3")
          }}
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
              src={CourseImage3}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
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
          onClick={()=>{
            navigate( "/home/courses/course4")
          }}
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
              src={CourseImage4}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
        onClick={()=>{
          navigate( "/home/courses/course5")
        }}
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
              src={CourseImage5}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
        </Box>
          

          {/* box 3 */}
          <Box
          onClick={()=>{
            navigate( "/home/courses/course6")
          }}
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
              src={CourseImage6}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
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
          onClick={()=>{
            navigate( "/tests")
          }}
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
              src={TestImage1}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
        
            onClick={()=>{
              navigate( "/tests")
            }}
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
              src={TestImage2}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
              onClick={()=>{
                navigate( "/tests")
              }}
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
              src={TestImage3}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
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
          onClick={()=>{
            navigate( "/tests")
          }}
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
              src={TestImage4}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
        onClick={()=>{
          navigate( "/tests")
        }}
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
              src={TestImage5}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
          onClick={()=>{
            navigate( "/tests")
          }}
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
              src={TestImage6}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course Title  
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
                    as={FaRegClock}
                    
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
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  difficulty level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
          

      </Flex>
    


    </>
  );
};


export default Home;