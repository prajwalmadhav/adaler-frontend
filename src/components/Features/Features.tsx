import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { ReactElement } from 'react';

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
        justify={'right'}
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
    <Container maxW={'7xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://i.ibb.co/LNR1kP2/Flame-Teamwork-by-Icons8.gif'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading>Making the world a better place</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            With our Artificial Intelligence and Machine Learning Technologies, you can achieve the impossible
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Realtime Feedback'}
            />
            <Feature
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Personalized Content'}
            />
            <Feature
              
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Detailed Reports'}
            />
          </Stack>
        </Stack>
        
      </SimpleGrid>
    </Container>
  );
}