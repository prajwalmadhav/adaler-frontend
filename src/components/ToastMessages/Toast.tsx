import React from 'react';
import {useToast} from '@chakra-ui/react';
export default function Toast() {
  const successToast = useToast({
    title: 'Account created.',
    description: "We've created your account for you.",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  return(
    successToast()
  );
}
