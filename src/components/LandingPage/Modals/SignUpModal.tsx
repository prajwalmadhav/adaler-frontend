import React, {useRef,useEffect,useState} from 'react';
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
    chakra,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    UseDisclosureReturn,
    AlertDescription,
    useToast,
  } from '@chakra-ui/react';
  import { Col, Container, Navbar } from "react-bootstrap";
  import { auth, provider } from "../../../firebaseSetup";
  import { IoMdCheckmarkCircle } from "react-icons/io";
  import './SignUpModal.min.css';
  import firebase from 'firebase/compat/app';
  import Form from 'react-bootstrap/Form';
  import { useNavigate } from "react-router-dom"
  import { FcGoogle } from 'react-icons/fc';
  import GoogleAuth from '../GoogleAuth/GoogleAuth'


  
  export default function SignUpModal({
    signinModal,
    onClose,
    ...props
  }: Omit<ModalProps, "children"> & {
    signinModal: UseDisclosureReturn;
  }) {

      const position  = useBreakpointValue({base: 'top', sm: 'top' ,
      md: 'top',
      lg: 'bottom',
      xl: 'bottom',
    }) as any;

    const successToast = useToast({
      title: 'Account Created',
      description: "Happy Learning",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: position,
    })
    const ExistToast = useToast({
      title: 'Email Error',
      description: "Email already in use",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: position,
    })
    const PassErrorToast = useToast({
      title: 'Password error',
      description: "Password does not match",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: position,
    })
    const NameErrorToast = useToast({
      title: 'Name error',
      description: "Name cannot be blank",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: position,
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
        else if( nameRef.current?.value === ""){
          NameErrorToast();
        }
        else{
          try {
            await auth.createUserWithEmailAndPassword(
              emailRef.current!.value,
              passwordRef.current!.value,
            );
            const user = firebase.auth().currentUser;
            await user?.updateProfile({
              displayName: nameRef.current?.value
            })
            console.log(user?.displayName)
            const ref = firebase.firestore().collection("person")
            await ref.doc().set({name,email}).catch((err)=>{
                alert(err);
            }) 
            successToast();
            navigate('/Welcome');
          } catch (error) {
            console.error(error);
            ExistToast();
          }
        }
        };
        
      const navigate = useNavigate()

        
  return (
    <Modal onClose={onClose} {...props} size="sm" blockScrollOnMount={false} isCentered motionPreset='slideInBottom' >
    <ModalOverlay />                                                                              
    <ModalContent className='ModalContent1'>
    <ModalHeader className='ModalHeader1'> Sign Up </ModalHeader>
    <ModalCloseButton/>
    <ModalBody className='ModalBody1'>
    <Form className="mt-4">
    <Form.Group controlId="Name">
    <Form.Label></Form.Label>
          <Form.Control type="text"  ref={nameRef} placeholder="Enter your name" required/>
          <Form.Control.Feedback type="invalid">
            Please Enter Name.
          </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formEmail">
      <Form.Label></Form.Label>
      <Form.Control ref={emailRef} type="email" placeholder=" Enter Email"/>
    </Form.Group>
  <Form.Group controlId="formPassword">
    <Form.Label></Form.Label>
    <Form.Control
      ref={passwordRef}
      type="password"
      placeholder=" Enter Password"
      required/>
  </Form.Group>
  <Form.Group controlId="formPassword">
    <Form.Label></Form.Label>
    <Form.Control
      ref={ConfirmpasswordRef}
      type="password"
      placeholder=" Re-Enter Password"
      required/>
  </Form.Group>
  <br></br>
    </Form>
          <Checkbox className='Checkbox1'>Remember me</Checkbox>
          <br></br>
          <br></br>
          <Button className='Button1' mr={160} onClick={()=>{
            
            setName(nameRef.current!.value)
            setEmail(emailRef.current!.value)
            createAccount();
           console.log('lol')
           //Alerts();
           console.log('lol121')
          }}>
                Sign Up </Button>
                
          <Button    
            w={'full'}
            maxW={'md'}
            marginTop={'10px'}
            //variant={'outline'}
            leftIcon={<FcGoogle />}
            onClick={()=>{
                GoogleAuth(navigate)
            }}>
              <Text>Sign up with Google</Text>
          </Button>
    </ModalBody>
    <br></br>
    <ModalFooter className='ModalFooter1'> 
    </ModalFooter>
    <Link className='Link1' onClick={()=>{
               signinModal.onOpen();
               onClose();
            }}>Already a User? Sign In</Link>
    <br></br>
  </ModalContent>
  </Modal>
  )
}

