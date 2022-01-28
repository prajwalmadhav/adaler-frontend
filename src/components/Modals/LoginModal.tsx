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

export default function LoginModal() {
    const { 
        isOpen: isOpenReportModal, 
        onOpen: onOpenReportModal, 
        onClose: onCloseReportModal 
    } = useDisclosure();
  return (
    <ModalContent>
              <ModalHeader className='ModalHeader'> Sign Up </ModalHeader>
              <ModalCloseButton/>
              <ModalBody className='ModalBody'>
              <FormControl id="Name" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email </FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <Checkbox>Remember me</Checkbox>
              </ModalBody>
              <ModalFooter className='ModalFooter'>
                <Button colorScheme="blue" mr={160} onClick={onCloseReportModal }> Sign Up </Button>
              </ModalFooter>
            </ModalContent>
  )
}
