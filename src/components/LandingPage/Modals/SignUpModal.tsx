import React, {useRef,useEffect,useState} from 'react';
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
  import './SignUpModal.min.css';
  import firebase from 'firebase/compat/app';

  
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
    const PassErrorToast = useToast({
      title: 'Password error',
      description: "Password does not match",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: "bottom",
    })
      const emailRef = useRef<HTMLInputElement>(null);
      const nameRef = useRef<HTMLInputElement>(null);
      const passwordRef = useRef<HTMLInputElement>(null);
      const ConfirmpasswordRef = useRef<HTMLInputElement>(null);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      
      const createAccount = async () => {
        if (passwordRef.current?.value !== ConfirmpasswordRef.current?.value){
          PassErrorToast();
        }
        else{
          try {
            await auth.createUserWithEmailAndPassword(
              emailRef.current!.value,
              passwordRef.current!.value,
            );
            const ref = firebase.firestore().collection("person")
            ref.doc().set({name,email}).catch((err)=>{
                alert(err);
            })
            successToast();
          } catch (error) {
            console.error(error);
            errorToast();
          }
        }
        };
        
        const { 
          isOpen: isOpenReportModal, 
          onOpen: onOpenReportModal, 
          onClose: onCloseReportModal 
      } = useDisclosure();
        

        
  return (
    <ModalContent className='ModalContent1'>
    <ModalHeader className='ModalHeader1'> Sign Up </ModalHeader>
    <ModalCloseButton/>
    <ModalBody className='ModalBody1'>
    <Form className="mt-4">
    <Form.Group controlId="Name">
      <Form.Label></Form.Label>
      <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
    </Form.Group>
    <Form.Group controlId="formEmail">
      <Form.Label></Form.Label>
      <Form.Control ref={emailRef} type="email" placeholder=" Enter Email" />
    </Form.Group>
  <Form.Group controlId="formPassword">
    <Form.Label></Form.Label>
    <Form.Control
      ref={passwordRef}
      type="password"
      placeholder=" Enter Password"/>
  </Form.Group>
  <Form.Group controlId="formPassword">
    <Form.Label></Form.Label>
    <Form.Control
      ref={ConfirmpasswordRef}
      type="password"
      placeholder=" Re-Enter Password"/>
  </Form.Group>
  <br></br>
    </Form>
          <Checkbox className='Checkbox1'>Remember me</Checkbox>
          <br></br>
          <br></br>
          <Button className='Button1' mr={160} onClick={()=>{
            
           createAccount();
           setName(nameRef.current!.value)
           setEmail(emailRef.current!.value)
           onCloseReportModal();
           console.log('lol')
           //Alerts();
           console.log('lol121')
          }}>
                Sign Up </Button>
    </ModalBody>
    <br></br>
    <ModalFooter className='ModalFooter1'> 
    </ModalFooter>
    <Link className='Link1'>Already a User? Sign In</Link>
    <br></br>
  </ModalContent>
  
  )
}

