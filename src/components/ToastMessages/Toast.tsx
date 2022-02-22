import React from 'react';
import {useToast} from '@chakra-ui/react';


export const SuccessToast =() => {
  useToast({
    title: 'Logged In',
    description: "Waiting for developers to build redirect pages",
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: "bottom-right",
})
}
export const ErrorToast =()=>{
  useToast({
    title: 'Invalid Login',
    description: "Please enter a valid login",
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: "top-right",
})
}


