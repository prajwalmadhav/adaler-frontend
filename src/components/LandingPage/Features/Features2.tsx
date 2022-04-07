import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Icon,
  } from '@chakra-ui/react';
  // import {
  //   IoAnalyticsSharp,
  //   IoLogoBitcoin,
  //   IoSearchSharp,
  // } from 'react-icons/io5';
  import { ReactElement } from 'react';
import { IoLogoBitcoin } from 'react-icons/io';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg:2 }} spacing={10}>
        <Stack mt={{base:'-150%',lg:0}} ml={{base:5,lg:-40}} mr={{base:3,lg:1}}>
          <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://i.postimg.cc/hjDCv24M/Online-learning-amico.png'
              }
              objectFit={'cover'}
            />
          </Flex>   
          </Stack>          
          
          <Stack spacing={6} mr={{base: 0, lg:-40}} mt={{base: '-40%', lg: 20}} ml={{base: 0, lg:20}}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={{base:'lg',lg:'2xl'}}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Us
            </Text>
            <Heading>Digital Education Platform For Rural India</Heading>
            <Text color={'gray.500'} textAlign='justify' fontSize={{base:'md',lg:'lg'}}>
            India is undergoing a digital transition, and the only way for the economy and society to evolve digitally is via digital education. The notion of digital learning is not new, and it has been in various forms for many years, but its relevance grew exponentially when the COVID-19 epidemic halted face-to-face instruction. Our system proves as an excellent example of an AI-based E-learning system.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
               
            </Stack>
            
          </Stack>
          
          
        </SimpleGrid>
      </Container>
    );
  }