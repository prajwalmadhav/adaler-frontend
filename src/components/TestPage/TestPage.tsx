import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
  
  const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
  ];
  interface PackageTierProps {
    title: string;
    image?: string;
    options: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
  }
  const PackageTier = ({
    image,
    title,
    options,
    typePlan,
    checked = false,
  }: PackageTierProps) => {
    const colorTextLight = checked ? 'white' : 'white';
    const bgColorLight = checked ? '#f13c3b' : '#f13c3b';
  
    const colorTextDark = checked ? 'white' : 'white';
    const bgColorDark = checked ? '#f13c3b' : '#f13c3b';

    
  
    return (

      <>
      <Stack
        p={3}
        py={3}
        
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
           
        <Heading size={'lg'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading size={'lg'}>{typePlan}</Heading>
        <Stack>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
            Start Test
          </Button>
        </Stack>
      </Stack>
      </>
    );
  };
  const ThreeTierPricingHorizontal = () => {
    return (
      <>
      <Box py={6} px={5} ml={{ base: 0, lg: '15%' }} min={'100vh'}>
        <Heading as='h2' size='xl' 
        ml = {{ base: '5px', md: 20, lg: '20px' }}
        mt = {{ base: '15px', lg: '15px'}}
        mb = {{ base: 5, md: 20, lg: '50px' }} >
          |Tests Catalog
        </Heading>
        
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <PackageTier

            title={'Python test 1'}
            typePlan="Tier 1"
            options={options} />
          <Divider />

        </Stack>
      </Box>
      <Box py={6} px={5} ml={{ base: 0, lg: '15%' }} min={'100vh'}>
          <Stack spacing={4} width={'100%'} direction={'column'}>
            <PackageTier

              title={'Python test 1'}
              typePlan="Tier 2"
              options={options} />
            <Divider />

          </Stack>
        </Box>
        <Box py={6} px={5} ml={{ base: 0, lg: '15%' }} min={'100vh'}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <PackageTier

            title={'Python test 1'}
            typePlan="Tier 3"
            options={options} />
          <Divider />

        </Stack>
      </Box>
      <Box py={6} px={5} ml={{ base: 0, lg: '15%' }} min={'100vh'}>
          <Stack spacing={4} width={'100%'} direction={'column'}>
            <PackageTier

              title={'Python test 1'}
              typePlan="Tier 1"
              options={options} />
            <Divider />

          </Stack>
        </Box>
        <Box py={6} px={5} ml={{ base: 0, lg: '15%' }} min={'100vh'}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <PackageTier

            title={'Python test 1'}
            typePlan="Tier 2"
            options={options} />
          <Divider />

        </Stack>
      </Box>
      <Box py={6} px={5} ml={{ base: 0, lg: '15%' }} min={'100vh'}>
          <Stack spacing={4} width={'100%'} direction={'column'}>
            <PackageTier

              title={'Python test 1'}
              typePlan="Tier 3"
              options={options} />
            <Divider />

          </Stack>
        </Box>
        </>

    
    );
  };
  
  export default ThreeTierPricingHorizontal;