import React, {useRef} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    ChakraProvider,
    Checkbox,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    chakra,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    AlertDescription,
    useToast,
  } from '@chakra-ui/react';
  import { Col, Container, Form, Navbar } from "react-bootstrap";
  import { auth } from "../../../firebaseSetup";
  import { IoMdCheckmarkCircle } from "react-icons/io";
  
  function Alerts(){
    return (
      <Flex
        w="full"
        bg="gray.600"
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="md"
          rounded="lg"
          overflow="hidden"
        >
          <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
            <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
          </Flex>
  
          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color={useColorModeValue("green.500", "green.400")}
                fontWeight="bold"
              >
                Success
              </chakra.span>
              <chakra.p
                color={useColorModeValue("gray.600", "gray.200")}
                fontSize="sm"
              >
                Your account was registered!
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  }


  export default function SignUpModal() {
    const successToast = useToast({
      title: 'Account Created',
      description: "Happy Learning",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "bottom",
    })
    const errorToast = useToast({
      title: 'Error',
      description: "Error Error Error",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: "bottom",
    })
      const emailRef = useRef<HTMLInputElement>(null);
      const passwordRef = useRef<HTMLInputElement>(null);
      
      const createAccount = async () => {
          try {
            await auth.createUserWithEmailAndPassword(
              emailRef.current!.value,
              passwordRef.current!.value,
            );
            successToast();
          } catch (error) {
            console.error(error);
            errorToast();
          }
          
        };
        const { 
          isOpen: isOpenReportModal, 
          onOpen: onOpenReportModal, 
          onClose: onCloseReportModal 
      } = useDisclosure();
        

        
  return (
    <ModalContent className='ModalContent'>
    <ModalHeader className='ModalHeader'> Sign Up </ModalHeader>
    <ModalCloseButton/>
    <ModalBody className='ModalBody'>
      <Form className="mt-4">
    <Form.Group controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control ref={emailRef} type="email" placeholder="Please Enter Email" />
    </Form.Group>
   <br></br>
  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
      ref={passwordRef}
      type="password"
      placeholder="Please Enter Password"
    />
  </Form.Group>
    </Form>
    <br></br>
          <Checkbox className='Checkbox'>Remember me</Checkbox>
    </ModalBody>
    <ModalFooter className='ModalFooter'>
    <br></br>
      <Button className='Button' colorScheme="blue" mr={160} onClick={() => {
          createAccount();
          onCloseReportModal();
          console.log('lol')
          //Alerts();
          console.log('lol121')
        }}> Sign Up </Button>
    </ModalFooter>
  </ModalContent>
  
  )
}

