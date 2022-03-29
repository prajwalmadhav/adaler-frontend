import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={0} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} textAlign='justify' color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Teachers & Students Speak!</Heading>
          <Text >We have been providing service around Rural and Urban India</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Amazing Initiative</TestimonialHeading>
              <TestimonialText>
              An Innovative Idea that is executed very well. I like the clean and user-friendly design. It helped me get the individual attention I needed.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://joeschmoe.io/api/v1/female/random'
              }
              name={'Anupama Vijaykumar'}
              title={'Professor at JIT, ISE Department '}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Learning Experience</TestimonialHeading>
              <TestimonialText>
              This System helped me learn a new programming language, very interactive and easy to use! Helped me understand a lot of concepts better.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://joeschmoe.io/api/v1/male/random'
              }
              name={'Prajwal Madhav'}
              title={'CEO at Pg.Inc Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Modern Methods of Teaching</TestimonialHeading>
              <TestimonialText>
              I loved the layout of the website and, the innovative technology used to help me learn. It simplified many concepts and the interactive sessions made me remember easily.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://joeschmoe.io/api/v1/joe'
              }
              name={'Sumukh Jadhav'}
              title={'Clerk at PG Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}