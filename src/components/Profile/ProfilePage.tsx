import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

export default function Warning() {
  return (
    <Box textAlign="center" py={10} px={6} ml={'10%'}>
      <WarningTwoIcon boxSize={'150px'} color={'orange.300'} />
      <Heading as="h1" size="2xl" mt={6} mb={2}>
        Profile Page
      </Heading>
      <Text fontSize="xl" color={'gray.500'}>
        This page is under construction. Will be updated soon.
      </Text>
    </Box>
  );
}