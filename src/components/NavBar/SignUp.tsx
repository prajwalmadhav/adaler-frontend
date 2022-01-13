import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
  Checkbox,
} from '@chakra-ui/react'


function ModalSignUp(){
  const {isOpen ,onOpen , onClose } = useDisclosure();

  return(

    <Box>
    
    <Button onClick={onOpen}>Sign Up</Button>

    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}  isCentered >
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader> Sign Up </ModalHeader>
      <ModalCloseButton/>
      <ModalBody>
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
      <ModalFooter>
        <Button colorScheme="blue" mr={160} onClick={onClose}> Sign Up </Button>
      </ModalFooter>
    </ModalContent>
    </Modal>
    </Box> 
  );
}

function App() {
  return(
    <ChakraProvider>
      <ModalSignUp/>

    </ChakraProvider>
  );
}

export default App;

