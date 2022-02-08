import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Divider,
  AlertTitle,
  Alert,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import './buttoncss.min.css';


export default function Simple() {
  const courseTitle = 'Intermediate Course'     //added editable variables
  const courseSubscript = 'Beginner | 2 weeks | 4 Tests'
  const courseDescription = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
  
  const courseObj1 = 'Python Data-Structures'
  const courseObj2 = 'Objective 1'
  const courseObj3 = 'Objective 2'
  const courseObj4 = 'Objective 3'
  const courseObj5 = 'Objective 4'
  const courseObj6 = 'Objective 5'

  const courseDetails1 = 'Detailed description of this detail lol 1'
  const courseDetails2 = 'Less detailed desc lol'
  const courseDetails3 = 'Detailed description of this detail lol 1'
  const courseDetails4 = 'Less detailed desc lol'
  
  const courseImage = 'https://leverageedu.com/blog/wp-content/uploads/2019/08/Computer-Courses-After-12th-Commerce.jpg'

  return (
    
    <Container maxW={'6xl'} ml = {{base:0, md: 20, lg: '290px' }} mt={{base:0, md: 20, lg:-10 }}>
      {/* <Heading as='h2' size='2xl' 
      ml = {{ base: '25px', md: 20, lg: '300px' }} 
      mt = {{ base: 0, md: 20, lg: 3 }}
      mb = {{ base: 0, md: 20, lg: '-50px' }} >
         Course Catalog
         
      </Heading>

      <Divider orientation='horizontal' color={useColorModeValue('gray.300','gray.600')} mt={{base:2, md: 20, lg:'70px' }} ml={{base:7, md: 20, lg:'325px' }} w={{base:'250px', md: 20, lg:'298px' }}/> */}
    
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Stack>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={courseImage}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '450px' }}
            mb={{ base: 2, sm: 2, lg: '65px' }}
          />

          <Button
          className="Learning-button-mob"
            rounded={'none'}
            // w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            w={{ base: 0, sm: 0, lg: '100%' }}
            h={{ base: -5, sm: 0, lg: 0 }}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(3px)',
              boxShadow: 'lg',
            }}>
           Start Learning
          </Button>

          <Button
          className="Learning-button-mob"
            rounded={'none'}
            // w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            w={{ base: 0, sm: 0, lg: '100%' }}
            h={{ base: -5, sm: 0, lg: 0 }}
            bg={useColorModeValue('gray.100', 'gray.50')}
            color={useColorModeValue('black', 'gray.900')}
            
            borderColor={useColorModeValue('black', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(3px)',
              boxShadow: 'lg',
            }}>
           Take Test
          </Button>

        </Stack>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {courseTitle}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
              ml = {{base:0, md: 20, lg: 2 }}>
              {courseSubscript}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.400', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {courseDescription}
              </Text>
              <Text fontSize={'lg'}>
                {/* MORE DESCRIPTION  */}
                
              </Text>

              <Button
              className="Learning-button-pc"
            rounded={'none'}
            // w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            w={{ base: 'full', sm: 0, lg: '100%' }}
            // h={{ base: 0, sm: 0, lg: 'full' }}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(3px)',
              boxShadow: 'lg',
            }}>
           Start Learning
          </Button>

          <Button
          className="Learning-button-pc"
            rounded={'none'}
            // w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            w={{ base: 'full', sm: 0, lg: '100%' }}
            h={{ base: 0, sm: 0, lg: 0 }}
            bg={useColorModeValue('gray.100', 'gray.50')}
            color={useColorModeValue('black', 'gray.900')}
            
            borderColor={useColorModeValue('black', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(3px)',
              boxShadow: 'lg',
            }}>
           Take Test
          </Button>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('#080f7b', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                COURSE objectives
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>{courseObj1}</ListItem>
                  <ListItem>{courseObj2}</ListItem>{' '}
                  <ListItem>{courseObj3}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>{courseObj4}</ListItem>
                  <ListItem>{courseObj5}</ListItem>
                  <ListItem>{courseObj6}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('#080f7b', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                COURSE DETAILS
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 1:
                  </Text>{' '}
                  {courseDetails1}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 2:
                  </Text>{' '}
                  {courseDetails2}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 3:
                  </Text>{' '}
                  {courseDetails3}                  
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 4:
                  </Text>{' '}
                  {courseDetails4}
                </ListItem>
                
              </List>
            </Box>
          </Stack>

          {/* <Button
            rounded={'none'}
            // w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            w={{ base: '100%', sm: 0, lg: 0 }}
            
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(3px)',
              boxShadow: 'lg',
            }}>
           Start Learning
          </Button> */}

        
        </Stack>
      </SimpleGrid>

      <Divider orientation='horizontal' color={useColorModeValue('black', 'gray.600')} ml='0px' mb='10px'/>
      
      <Divider className="divider"orientation='horizontal' color={useColorModeValue('black', 'gray.600')} ml='0px'/>

    </Container>
    
  );
}