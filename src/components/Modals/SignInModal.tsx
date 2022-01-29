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
  } from '@chakra-ui/react';
  import { Col, Container, Form, Navbar } from "react-bootstrap";
  import { auth } from "../../firebaseSetup";
  

export default function SignInModal() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      alert("Logged in");
    } catch (error) {
      console.error(error);
      alert(error);
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
                <Button colorScheme="blue" mr={160} onClick={signIn} > Sign In </Button>
              </ModalFooter>
            </ModalContent>
  )
}
