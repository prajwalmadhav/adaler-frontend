import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import  './ProfilePage.min.css';

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['', 'Intermediate', 'Py Basics', 'Advance', 'Core', 'CS'],
  datasets: [
    {
      label: 'Report',
      data: [6, 5, 8, 2, 8,9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 10,
    },
  ],
};

export default function ProfilePage() {
  return( 
  <><Flex ml={{ base: 0, lg: '20%' }}>
      <Center py={6}>
        <Box
          maxW={'800px'}
          w={'500px'}

          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'sm'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'3xl'}
            src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }} />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Name comes here
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>

          </Text>





        </Box>
      </Center>
      <Radar data={data} />
    </Flex></>
  
  
  );
}
