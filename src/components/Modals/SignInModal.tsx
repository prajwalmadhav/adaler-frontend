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
    const createAccount = async () => {
        try {
          await auth.createUserWithEmailAndPassword(
            emailRef.current!.value,
            passwordRef.current!.value,
          );
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <ModalContent>
    <ModalHeader className='ModalHeader'> Sign In </ModalHeader>
    <ModalCloseButton/>
    <ModalBody className='ModalBody'>
      <Form className="mt-4">
    <Form.Group controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control ref={emailRef} type="email" placeholder="email" />
    </Form.Group>
   
  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
      ref={passwordRef}
      type="password"
      placeholder="password"
    />
  </Form.Group>
    </Form>
          <Checkbox>Remember me</Checkbox>
    </ModalBody>
    <ModalFooter className='ModalFooter'>
      <Button colorScheme="blue" mr={160} onClick={createAccount}> Sign In </Button>
    </ModalFooter>
  </ModalContent>
  )
}

