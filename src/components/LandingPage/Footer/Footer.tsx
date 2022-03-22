import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  IconButton,
  Input,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaGithub, FaGooglePlay, FaInstagram, FaApple, FaRedditAlien} from 'react-icons/fa';
import Logo from "../../../assets/Images/logoblack.png";
import { GrAppleAppStore } from "react-icons/gr";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}  //#04294f
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
        
        <Stack align={'flex-start'}>
            <ListHeader>Technology</ListHeader>
            <Link href={'#'}>Firebase</Link>
            <Link href={'#'}>Netlify</Link>
            <Link href={'#'}>Git</Link>
            <Link href={'#'}>Node</Link>
            <Link href={'#'}>VS Code</Link>
          </Stack>
        

          <Stack align={'flex-start'}>
            <ListHeader>Languages</ListHeader>
            <Link href={'#'}>React</Link>
            <Link href={'#'}>TypeScript</Link>
            <Link href={'#'}>JavaScript</Link>
            <Link href={'#'}>Python</Link>
            <Link href={'#'}>CSS</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('#f04e23', '#f04e23')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Background</Link>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
              {/* Contributors  */}
          {/* <Stack align={'flex-start'}>
            <Stack align={'center'}>
            <ListHeader>Contributers</ListHeader>
            <Link href={'#'}>Pg</Link>          
            <Link href={'#'}>Smoke</Link>
            <Link href={'#'}>Ti</Link>
            <Link href={'#'}>Kertz</Link>
            </Stack>
          </Stack> */}
          
          <Stack align={'flex-start'} >
            <ListHeader>Stay up to date</ListHeader>

            <Stack direction={'row'} >
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('#f04e23', '#f04e23')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: '#f04e2395',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>

            <Stack spacing={6}>
            <Box>
              
            </Box>
            
            <ListHeader>Follow Us</ListHeader>
            <Stack direction={{base:'column' ,lg:'row'}}spacing={6}>
              <SocialButton label={'github'} href={'#'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'PlayStore'} href={'#'}>
                <FaGooglePlay />
              </SocialButton>
              <SocialButton label={'AppStore'} href={'#'}>
                <GrAppleAppStore />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Reddit'} href={'#'}>
                <FaRedditAlien />
              </SocialButton>
            </Stack>
          </Stack>
          </Stack>
          
         

        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '2px solid',
            borderColor: useColorModeValue('gray.700', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '2px solid',
            borderColor: useColorModeValue('gray.700', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <img alt='logo' style={{ width: 150 }} src={ Logo }  />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Outlearn. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}