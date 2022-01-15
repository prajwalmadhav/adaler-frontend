import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#000000',
                  zIndex: -1,
                }}>
                  {/* Heading Text was here it has been removed  */}
              </Text>
              
              <Text color={'#f13c3b'} as={'span'}>
              Personlized
              </Text>{' '}
              <br />{' '}
              <Text color={'#080f7b'} as={'span'}>
                Learning Systems
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              A personlized learning environment backed with active learning models.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'#03294e'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Get Started
              </Button>
              <Button rounded={'full'}>Try Demo</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            boxSize='650px'
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://i.ibb.co/x2jtQXL/Flame-Space-Adventures-transparent-by-Icons8.gif'
            
            }
          />
        </Flex>
      </Stack>
    );
  }
