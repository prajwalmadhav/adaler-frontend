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
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react';
  import { Col, Container, Form, Navbar } from "react-bootstrap";
  import { auth } from "../../../firebaseSetup";
  import Toast from '../../ToastMessages/Toast'
  
export default function SignInModal() {
   const successToast = useToast({
    title: 'Logged In',
    description: "Waiting for developers to build redirect pages",
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: "top-right",
  })
  const errorToast = useToast({
    title: 'Invalid Login',
    description: "Please enter a valid login",
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: "top-right",
  })

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
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
    <ModalContent>
              <ModalHeader className='ModalHeader'> Sign In </ModalHeader>
              <ModalCloseButton/>
              <ModalBody className='ModalBody'>
              <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
              </Form.Group>
              <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="password" />
                <Checkbox>Remember me</Checkbox>
              </Form.Group>
              </ModalBody>
              <ModalFooter className='ModalFooter'>
                <Button colorScheme="blue" mr={160} onClick={()=>{
                signIn()
                //toast();
                }}>
                Sign In </Button>
              </ModalFooter>
            </ModalContent>
  )
}
