import React, { useState } from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  Code,
  Progress,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

export default function Sj() {

  const question = 'This is a demo question which is asked for testing which is asked ?'     //added editable variables
  
  return (

    <Stack >
        <Progress 
          mt={{ base: 0, md: "10%", lg: 20 }}
          mb={{ base: 0, md: "10%", lg: 5 }}
          ml={{ base: 0, md: "10%", lg: "30%" }}
          mr={{ base: 0, md: "10%", lg: "15%" }}
          value={10}
          size='md' 
          colorScheme='red' />
        
        <Flex
          ml={{ base: 0, md: "10%", lg: 40 }}
          bg={useColorModeValue("white", "gray.800")}
          w="100%"
          p={3}
          justify="center"
          alignItems="center"
          justifyContent="center"
        >
          <Box
          bg={useColorModeValue("gray.50", "gray.800")}
            w={{ base: "full", md: "75%", lg: "70%" }}
            px={4}
            rounded="40"
            py={10}
            textAlign={{ base: "left", lg: "center" }}
            ml={{ base: 0, md: "10%", lg: "15%" }}
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

        <Stack >
        <RadioGroup defaultValue='1' >
          <Stack ml={'25%'} mr={'10%'} spacing={6} direction='column' >

          <Box
            cursor='pointer'
            borderWidth='1px'
            borderRadius='md'
            boxShadow='md'
            _checked={{
              bg: 'teal.600',
              color: 'white',
              borderColor: 'teal.600',
            }}
            _focus={{
              boxShadow: 'outline',
            }}
            px={5}
            py={3}
            >
            <Radio value='1'>Create a component that consumes the useRadio hook.</Radio>
          </Box>     

          <Box
            cursor='pointer'
            borderWidth='1px'
            borderRadius='md'
            boxShadow='md'
            _checked={{
              bg: 'teal.600',
              color: 'white',
              borderColor: 'teal.600',
            }}
            _focus={{
              boxShadow: 'outline',
            }}
            px={5}
            py={3}
            >
            <Radio value='2'>We recommend passing the namCreate a component that consume e prop to the RadioGroup component,</Radio>
          </Box>


          <Box
            cursor='pointer'
            borderWidth='1px'
            borderRadius='md'
            boxShadow='md'
            _checked={{
              bg: 'grey.400',
              color: 'white',
              borderColor: 'teal.600',
            }}
            _focus={{
              boxShadow: 'outline',
            }}
            px={5}
            py={3}
            >
            <Radio value='3'>Refers to the id of the element that labels the radio element.</Radio>
          </Box>

          <Box
            cursor='pointer'
            borderWidth='1px'
            borderRadius='md'
            boxShadow='md'
            _checked={{
              bg: 'teal.600',
              color: 'white',
              borderColor: 'teal.600',
            }}
            _focus={{
              boxShadow: 'outline',
            }}
            px={5}
            py={3}
            >
            <Radio value='4'>Create a component that consumes the useRadio hoo Create a component that consumeCreate a component that consumeCreate a component that consumek.</Radio>
          </Box> 
            {/* <Radio value='2'>In some cases, you might need to create components that work  components that</Radio>
            <Radio value='3'>In some cases, you might need to create components that work like radios</Radio>
            <Radio value='4'>In some cases, you might n some cases, you m eed to create components the radios</Radio> */}
          </Stack> 
         </RadioGroup>
        </Stack>

    </Stack>
  );
}
