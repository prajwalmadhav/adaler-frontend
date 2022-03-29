import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaChalkboardTeacher, FaChartPie, FaClock, FaFileInvoice, FaLaptop, FaMobileAlt } from "react-icons/fa";
export default function Fgl() {
  const Feature = (props: { color: any; icon: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
      <Box >
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={useColorModeValue(`black`, `${props.color}.100`)}
          bg={useColorModeValue(`${props.color}`, `${props.color}.600`)}
        >
          <Icon
            boxSize={6}
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="extrabold"
          fontSize={{base:"sm",lg:"xl"}}
          lineHeight="shorter"
          color={useColorModeValue("white","#fff")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          fontSize={{base:"sm",lg:"xl"}}
          textAlign='justify'
          color={useColorModeValue("white", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#CAD7E6", "gray.600")}
      p={{base:1,lg:20}}
      w="auto"
      justifyContent="center"
      alignItems="center"
      py={{base:10,lg:40}}
      
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg={useColorModeValue("#04294f", "gray.800")}
        shadow="2xl"
        rounded={'lg'}
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("white","#fff")}
          >
            Features
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("white", "gray.400")}
          >
            Get insights to dig down into what's powering your growth the most.
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 3, lg: 3 }}
          // display={{ base: 'none' , lg: 'inline-block' }}
          spacingX={{ base: 5, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <Feature
            color="#ffb400"
            title="Personalized Learning"
            icon={
              <FaChalkboardTeacher  />
            }
          >
            A customized learning experience for every user, suitable for their specific learning needs. 
          </Feature>

          <Feature
            color={useColorModeValue("#ffb400", "#ffb400")}
            title="Adaptive Tests"
            icon={
              <FaFileInvoice/>
            }
          >
            A testing system using the latest technology to help you get the most accurate results. 

          </Feature>

          <Feature
            color="#ffb400"
            title="Online Platform"
            icon={
              <FaLaptop/>
            }
          >
            A dynamic online platform that is user-friendly and accessible on multiple devices. 
          </Feature>

          <Feature
            color="#ffb400"
            title="Real-Time Feedback"
            icon={
              <FaClock/>
            }
          >
            Provides accurate and real-time feedback to help learners understand concepts effectively. 
          </Feature>
          <Feature
            color="#ffb400"
            title="Performance Analysis"
            icon={
              <FaChartPie/>
            }
          >
            A quick performance report that allows learners ad their teachers to track progress effectively.
          </Feature>
          <Feature
            color="#ffb400"
            title="Mobile responsive"
            icon={
              <FaMobileAlt/>
            }
          >
            The system is responsive to many screen sizes allowing users more flexibility in learning.
          </Feature>

        </SimpleGrid>
      </Box>
    </Flex>
  );
}