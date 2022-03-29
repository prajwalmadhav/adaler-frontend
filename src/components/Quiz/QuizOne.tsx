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
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

export default function Sj() {

  const question = 'This is a demo question which is asked for testing ?'     //added editable variables
  
  
  return (

    <Stack >
        <Progress
          mt={{ base: 0, md: "10%", lg: 10 }}
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
          <Stack ml={{base: '5%' ,lg: '25%'}} mr={{base:'5%',lg:'10%'}} spacing={6} direction='column' >
          
          <Radio value='1'>
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
            pr={20}
            py={3}
            >
            Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio

          </Box>
          </Radio>
          <Radio value='2'>
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
            pr={20}
            py={3}
            >
            Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio

          </Box>
          </Radio>
          <Radio value='3'>
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
            pr={20}
            py={3}
            >
            Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio

          </Box>
          </Radio>
          <Radio value='4'>
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
            pr={20}
            py={3}
            >
            Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio

          </Box>
          </Radio>
        
          </Stack>
         </RadioGroup>
         <Stack  pb={10} direction='row' spacing={4}
          >
          <Button  ml={{base: '70%',lg:'82%'}} mt={3} rightIcon={<ArrowForwardIcon />} colorScheme='orange' variant='outline'>
            Next
          </Button>
        </Stack>

        </Stack>
    </Stack>
  );
}

function useRadio(props: any): { getInputProps: any; getCheckboxProps: any; } {
  throw new Error("Function not implemented.");
}


function props(props: any): { getInputProps: any; getCheckboxProps: any; } {
  throw new Error("Function not implemented.");
}
