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
          fontWeight="semibold"
          lineHeight="shorter"
          color={useColorModeValue("white","#000000000")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          fontSize="sm"
          color={useColorModeValue("white", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("gray.600", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
      py={40}
      
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
            color={useColorModeValue("white","#000000000")}
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
          spacingX={{ base: 1, lg: 24 }}
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
            Hand crafted dashboards for everything from Recurring Revenue to
            Customer Churn.
          </Feature>

          <Feature
            color="#ffb400"
            title="Adaptive Tests"
            icon={
              <FaFileInvoice/>
            }
          >
            Your central hub that helps you see, and react to, absolutely
            everything that’s happening.
          </Feature>

          <Feature
            color="#ffb400"
            title="Online Platform"
            icon={
              <FaLaptop/>
            }
          >
            Stay informed with daily, weekly, or monthly reports on all your
            insights data.
          </Feature>

          <Feature
            color="#ffb400"
            title="Real-Time Feedback"
            icon={
              <FaClock/>
            }
          >
            Our forecasting is your magical crystal ball that helps you predict
            and plan for the future.
          </Feature>
          <Feature
            color="#ffb400"
            title="Performance Analysis"
            icon={
              <FaChartPie/>
            }
          >
            How does your company compare? Learn how your company stacks up in
            the industry.
          </Feature>
          <Feature
            color="#ffb400"
            title="Mobile responsive"
            icon={
              <FaMobileAlt/>
            }
          >
            Organize your customers to bring meaningful and comparative insights
            across your dashboards.
          </Feature>

        </SimpleGrid>
      </Box>
    </Flex>
  );
}