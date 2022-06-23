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
  const [question,setQuestion] = useState("What is a variable?",);
  
  var questions = [
    [
    
    "What is meant by data types?",
    "In Python, a variable may be assigned a value of one type, and then later assigned a value of a different type",
    "Which are the different Numeric data types?",
    ],
    ["What is the maximum length of an identifier in python?",
    "Which of the following statement is False?",
    "What is the output of the following code: print 9//2",
    "Which of the following is not a valid variable name in Python?",
    ],
    [
      "Which is the correct form of complex number?",
    "What are python strings?",
    "What is a set?",
    "Which of the following is the example of typecasting?",
    ],
    ["Which of the following declarations is incorrect?",
    "In Python, a variable must be declared before it is assigned a value:",
    "Why does the name of local variables start with an underscore discouraged?",
    "What is integer?",
    ],
    ["What is floating point number",
    "Is Python case sensitive when dealing with identifiers?",
    "In which data type, indexing is not valid?",
    "How can we create an empty list in python?",
    ],
    ]
  var options = [
    [["A variable is any characteristics, number, or quantity that can be measured or counted.",
    "A variable is any characteristics that can be measured.",
    "A variable is any quantity that can be measured or counted.",
    "A variable is any characteristics, number, or quantity that can not be measured or counted.",
    "A variable is any characteristics, number, or quantity that can be measured or counted."
    ],
    ["A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error",
    "A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical operations can be applied to it without causing an error",
    "A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it with causing an error",
     "A data type, in programming, is a classification that doesn’t specifies which type of value a variable has and what type of mathematical operations can be applied to it with causing an error",
     "A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical,relational or logical operations can be applied to it without causing an error"],
    ["True",
    "False",
    "None",
    "None",
    "True"],
    ["Complex",
    "Bool",
    "Tuple",
    "Range",
    "Complex",
    ]],
    [["32",
    "31",
    "63",
    "None of the above",
    "None of the above",],
    ["Variable names can be arbitrarily long.",
    "They can contain both letters and numbers.",
    "Variable name can begin with underscore.",
    "Variable name can begin with number.",
    "Variable name can begin with number."],
    ["4",
    "4.5",
    "4.0",
    "Error",
    "4",
    ],
    ["var",
    "var_name",
    "var11",
    "5var",
    "5var"]],
    [["x+yj",
    "xi+yj",
    "xj+yi",
    "xi+y",
    "x+yj"],
    ["A String is a sequence of Unicode characters. String is called str.",
    "A String is a sequence of Unicode characters. String is called strg.",
    "A String is a sequence of Unicode numbers. String is called str.",
    "A String is a sequence of set. String is called str.",
    "A String is a sequence of Unicode characters.String is called str.",],
    ["The Collection of Unique items that are in order is called Set",
    "The Collection of Unique list that are in order is called Set",
    "The Collection of Unique list that are not in order is called Set",
    "The Collection of Unique items that are not in order is called Set",
    "The Collection of Unique items that are not in order is called Set",],
    ["int(5)",
    "str(5)",
    "str(xyz)",
    "All of the above",
    "All of the above"]],
    [["None Of the below",
    "_x = 2",
    "__x = 3",
    "__xyz__ = 5",
    "None Of the below"],
    ["True",
    "False",
    "None",
    "None",
    "False",],
    ["To identify the variable",
    "It confuses the interpreter",
    "It indicates a private variable of a class",
    "None of these",
    "It indicates a private variable of a class"],
    ["The integer can be of any length without any limitation which can go up to the maximum available memory of the system.",
    "The integer cannot be of any length without any limitation which can go up to the maximum available memory of the system.",
    "The integer can be of any length with any limitation which can go up to the maximum available memory of the system.",
    "None of the above",]],
    [["The difference between floating points and integers is decimal points",
    "The difference between floating points and range is decimal points",
    "The difference between float and integers is decimal points",
    "The difference between range and integers is decimal points",
    "The difference between floating points and integers is decimal points",],
    ["Yes",
    "No",
    "Machine dependent",
    "None of the above",
    "Yes"],
    ["List",
    "String",
    "Dictionary",
    "None of the above",
    "Dictionary"],
    ["list=()",
    "list.null",
    "null.list",
    "list=[]",
    "list=[]"]]]
   
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
