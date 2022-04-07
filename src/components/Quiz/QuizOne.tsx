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
var counter = 0
export default function Sj() {

  const [question,setQuestion] = useState("What is a variable?");
  const[option, setOption] = useState("Loreum Epsum")
  
  var questions = [
        "What is a function?",
        "How manu Values can Bool Accept?",
        "What are Primitive Data types",
        "How do you declare a variable in python?",
        ]
  var options = [
      ["Variable is value that can change",
        "Variables can't be changed",
        "Variables are block of code",
        "I don't know"
      ],
      ["It is an Independent Block of Code",
        "It is a different Program",
        "Used to initialize Variables",
        "I don't know"
      ],
      ["0",
        "3",
        "2",
        "1"
      ],
      ["Data types of collections",
        "Pre-defined by the program",
        "Customizable Data types",
        "I don't know",
      ],
      ["X + 3 = Z",
        "var b = 2",
        "X = 3",
        "I don't know",
      ]
    ]
  function nextHandler(){
    console.log(counter);
    setQuestion(questions[counter]);
    if (counter ==4){
      counter = 0
    }
    counter = counter + 1;
  }
  return (

    <Stack >
        <Progress
          mt={{ base: 0, md: "10%", lg: 10 }}
          mb={{ base: 0, md: "10%", lg: 5 }}
          ml={{ base: 0, md: "10%", lg: "30%" }}
          mr={{ base: 0, md: "10%", lg: "15%" }}
          value={counter * 2 * 10}
          sx = {{'>[role="progressbar"]':{transition: "width 200ms ease-out"}}}
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
            {/* Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio */}
            {options[counter][0]}
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
            {/* Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio */}
            {options[counter][1]}
            
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
            {/* Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio */}
            {options[counter][2]}

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
            {/* Lorem ipsum dolor sit amet. Ea consequuntur nihil est ipsum autem et ducimus voluptatem. Aut ipsum dolores est optio */}
            {options[counter][3]}

          </Box>
          </Radio>
        
          </Stack>
         </RadioGroup>
         <Stack  pb={10} direction='row' spacing={4}
          >
          <Button  ml={{base: '70%',lg:'82%'}} mt={3} rightIcon={<ArrowForwardIcon />} colorScheme='orange' variant='outline'
            onClick={nextHandler}
          >
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
