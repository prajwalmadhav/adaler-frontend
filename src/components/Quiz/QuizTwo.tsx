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
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Badge,
} from "@chakra-ui/react";
import test from './test.json'
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
var counter = 0
var level = 0
var linearReg: any[] = [] 
var qCount = 0
var cAnswers = 0
export default function Sj() {
  const [option, setOption] = React.useState(1)
  const [question,setQuestion] = useState("Which of the following is the use of function in python?",);
  
  var questions = [
    [
    "Which keyword is used for function?",
     "What are the two main types of functions? ",
    "Where is function defined?",],
    ["What is called when a function is defined inside a class?",
    "Which of the following is the use of id() function in python? ",
    "Which of the following refers to mathematical function? ",
    "Python supports the creation of anonymous functions at runtime, using a construct called __________ ",],
    ["What are the two main types of functions?",
    "Which of the following items are present in the function header? ",
    "What is called when a function is defined inside a class?",
    "If return statement is not used inside the function, the function will return:",],
    ["In which part of memory does the system stores the parameter and local variables of funtion call?",
    "How is a function declared in Python?",
    "Which one of the following is the correct way of calling a function?",
    "You can also create your own functions, these functions are called?",],
    ["Function blocks begin with the keyword?",
    "A return statement with _____ arguments.",
    "___________ are the arguments passed to a function in correct positional order.",
    "Which of the following function headers is correct?",]]
  var options = [[["Functions are reusable pieces of programs",
    "Functions don’t provide better modularity for your application",
    "you can’t also create your own functions",
    "All of the mentioned",
    "Functions are reusable pieces of programs",],
    ["Fun",
    "Define",
    "Def",
    "Function", 
    "Def",],
    ["Custom function",
    "Built-in function & User defined function",
    "User function",
    "System function",
    "Built-in function & User defined function",],
    ["Module",
    "Class",
    "Another function",
    "All of the mentioned",
    "All of the mentioned ",]],
    [["Module",
    "Class",
    "Another function",
    "Method",
    "Method "],
    ["Id returns the identity of the object",
    "Every object doesn’t have a unique id",
    "All of the mentioned",
    "None of the mentioned",
    "Id returns the identity of the object",],
    ["sqrt",
    "rhombus",
    "add",
    "rhombus",
     "sqrt",],
    ["lambda",
    "pi",
    "anonymous",
    "none of the mentioned",
    "lambda",]],
    [["Custom function",
    "Built-in function & User defined function",
    "User function",
    "System function",
    "Built-in function & User defined function",],
    ["Module",
    "Class",
    "Another function",
    "All of the mentioned",
    "All of the mentioned",],
    ["class",
    "function",
    "Method",
    "module",
     "Method",],
    ["None",
    "0",
    "Null",
    "Arbitary value",
     "None",]],
    [["heap",
    "stack",
    "Uninitialized data segment",
    "None of the above",
    "stack",],
    ["def function function_name():",
    "declare function function_name():",
    "def function_name():",
    "declare function_name():",
    "def function_name():",],
    ["function_name()",
    "call function_name()",
    "ret function_name()",
    "function function_name()",
    "function_name()",],
    [" built-in functions",
    "user-defined functions",
    "py function",
    "None of the above",
    "user-defined functions",]],
    [["define",
    "fun",
    "function",
    "def",
    "def",],
    ["No",
    "1",
    "2",
    "Any",
     "No",],
    ["Required arguments",
    "Keyword arguments",
    "Default arguments",
    "Variable-length arguments",
    "Required arguments",],
    ["def fun(a = 2, b = 3, c)",
    "def fun(a = 2, b, c = 3)",
    "def fun(a, b = 2, c = 3)",
    "def fun(a, b, c = 3, d)",]]]
   
  function ml(n: number){
    linearReg.push(n)
    console.log(linearReg)
    if (linearReg.length == 3){
      const reducer = (accumulator: any, curr: any) => accumulator + curr;
      var sum = linearReg.reduce(reducer)
      if (sum >= 2){
        level += 1
        counter = -1
      }
      else if (sum == 1 && level != 0){
        level -= 1
        counter = 1
      }
      else if (sum == 0 && level != 0){
        level -= 1
        counter = -1

      }
      else{
        counter = -1
      }
      console.log("counter " + counter)
      console.log("Level " + level)
      linearReg = []
    }
  }
  function score(n: any){
    qCount+=1
    if (n == 1){
      cAnswers+=1
    }
    console.log("index " +cAnswers)

    if(qCount == 4){
      setQuestion("You scored " +cAnswers+"/10")
    }

  }
  function nextHandler(){
    // console.log(options[level][counter][option-1])
    // console.log(counter);
    // console.log("counter")
    // console.log(options[level][counter][4])
    if (options[level][counter][option-1] == options[level][counter][4]){
      console.log("Correct")
      score(1)
      ml(1) 
    }
    else{
      console.log("Wrong")
      score(0)
      ml(0)
    }
    // level = level + 1;
    console.log("Level" + level)
    // console.log(Radio)
    setQuestion(questions[level][counter+1]);
    if (counter ==4){
      counter = 0
    }
    counter = counter + 1;
    // console.log(option)
  }
  function optionHandler(optionS: any){
    setOption(optionS)
  }
  
  return (

    <Stack >
        <Progress
          mt={{ base: 0, md: "10%", lg: 10 }}
          mb={{ base: 0, md: "10%", lg: 5 }}
          ml={{ base: 0, md: "10%", lg: "30%" }}
          mr={{ base: 0, md: "10%", lg: "15%" }}
          value={qCount * 10}
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
            <Badge justify="center"
          alignItems="center"
          justifyContent="center" colorScheme='green'>Level {level+1}</Badge>
          </Box>
          
        </Flex>
        

        <Stack >
        <RadioGroup defaultValue='1' >
          <Stack ml={{base: '5%' ,lg: '25%'}} mr={{base:'5%',lg:'10%'}} spacing={6} direction='column' >
          
  
          <Radio value='1' onClick={() => optionHandler(1)}>

          <Box
            onClick={() => optionHandler(1)}
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
            {options[level][counter][0]}
          </Box>
          </Radio>
          <Radio value='2' onClick={() => optionHandler(2)}>
          <Box
            onClick={() => optionHandler(2)}
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
            {options[level][counter][1]}
            
          </Box>
          </Radio>
          <Radio value='3' onClick={() => optionHandler(3)}>
          <Box
          onClick={() => optionHandler(3)}
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
            {options[level][counter][2]}

          </Box>
          </Radio>
          <Radio value='4' onClick={() => optionHandler(4)}>
          <Box
          onClick={() => optionHandler(4)}
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
            {options[level][counter][3]}

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
