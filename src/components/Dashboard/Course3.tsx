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
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

export default function Simple() {
  return (
    <Container maxW={'6xl'} ml = {{base:0, md: 20, lg: '290px' }} mt={{base:0, md: 20, lg:-10 }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            
            src={
              'https://lastmomenttuitions.com/wp-content/uploads/2020/10/python-.jpg'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Advance Course
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
              ml = {{base:0, md: 20, lg: 2 }}>
              Advance | 2 weeks | 4 Tests
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                {/* MORE DESCRIPTION  */}
                
              </Text>
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
                  <ListItem>Python Data-Structures</ListItem>
                  <ListItem>Objective 2</ListItem>{' '}
                  <ListItem>Objective 3</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Objective 4</ListItem>
                  <ListItem>Objective 5</ListItem>
                  <ListItem>Objective 6</ListItem>
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
                  Detailed description of this detail lol 1
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 2:
                  </Text>{' '}
                  Less detailed desc lol
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 3:
                  </Text>{' '}
                  Detailed description of this detail lol 1
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Detail 4:
                  </Text>{' '}
                  Less detailed desc lol
                </ListItem>
                
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(3px)',
              boxShadow: 'lg',
            }}>
           Start Learning
          </Button>

        
        </Stack>
      </SimpleGrid>
      
      <Divider orientation='horizontal' color={useColorModeValue('gray.500', 'gray.600')} ml='0px'/>

    </Container>
  );
}