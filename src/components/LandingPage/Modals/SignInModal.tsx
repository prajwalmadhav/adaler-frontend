import React, {useRef} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalProps,
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
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    UseDisclosureReturn,
    useToast,
  } from '@chakra-ui/react';
  import { Col, Container, Form, Navbar } from "react-bootstrap";
  import { auth, provider } from "../../../firebaseSetup";
  import {Link} from "react-router-dom";
  import './SignInModal.min.css';
  import './SignInModal';
  import './SignOut';
  import SignUpModal from './SignUpModal';
  import { useNavigate } from "react-router-dom"
  import { FcGoogle } from 'react-icons/fc';
  import GoogleAuth from '../GoogleAuth/GoogleAuth'
  
export default function SignInModal({
      signupModal,
      onClose,
      ...props
    }: Omit<ModalProps, "children"> & {
      signupModal: UseDisclosureReturn;
    })
  {
  const navigate = useNavigate()
  
  const successToast = useToast({
    title: 'Logged In',
    description: "Waiting for developers to build redirect pages",
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: "bottom-right",
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
      navigate('/home');
    } catch (error) {
      console.error(error);
      errorToast();
    }
  };

  

  return (
    <Modal onClose={onClose} {...props} size="sm" blockScrollOnMount={false} isCentered motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent className='ModalContent2' >
              <ModalHeader className='ModalHeader2'> Sign In </ModalHeader>
              <ModalCloseButton/>
              <ModalBody className='ModalBody2'>
              <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className='Forms2' ref={emailRef} type="email" placeholder="Enter Email" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className='Forms2' ref={passwordRef} type="password" placeholder="Enter Password" />
              <br></br>
                <Checkbox className='Checkbox2'>Remember me</Checkbox>
              </Form.Group>
              <br></br>
              <Button className='Button2' mr={160} onClick={()=>{

                signIn()
                //toast();
                }}>
                Sign In </Button>
                <Button    
                  w={'full'}
                  maxW={'md'}
                  marginTop={'10px'}
                  //variant={'outline'}
                  leftIcon={<FcGoogle />}
                  onClick={()=>{
                      GoogleAuth(navigate);
                }}>
              <Text>Sign in with Google</Text>
          </Button>
              </ModalBody>
              <br></br>
              <ModalFooter className='ModalFooter2'>
              </ModalFooter>
              <Link to="" className='Link2' onClick={() => {
                  signupModal.onOpen();
                  onClose();

              }}>New User? Sign Up Here 
               </Link>
              
               <br></br>
    </ModalContent>  
    </Modal>
  )
}
