import React, { ReactNode, useEffect, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import Logo from "../../assets/Images/logoblack.png";
import { auth } from "../../firebaseSetup";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { link } from 'fs';
import firebase from 'firebase/compat/app';

interface LinkItemProps {
  name: string;
  icon: IconType;
  link?:string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, link:'/home'},
  { name: 'Courses', icon: FiTrendingUp, link:'/home/courses' },
  { name: 'Tests', icon: FiCompass, link:'/tests'},
  { name: 'Profile', icon: FiStar , link:'/profile'},
  { name: 'Settings', icon: FiSettings , link:'/settings' },
  

];


export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  return (
    <Box bg={useColorModeValue("#fff", "gray.600")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p="40">
        {children}
      </Box> */}
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <a href="/home">
        <img alt='logo' style={{ width: 150 }} src={ Logo } />
        </a>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link?: string;
  children: ReactText;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Link href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#080f7b',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const SignOut = async () => {
  await auth.signOut();
};
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((users) => {
      if (users) {
        setCurrentUser(users)
      } 
    });  
  })
  
  var pic = auth.currentUser?.photoURL as any
  if (pic == null || pic === undefined) {
    pic = "https://joeschmoe.io/api/v1/random" as any
  }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('#9e9e9e', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}>
  
        <img alt='logo' style={{ width: 150 }} src={ Logo } />
        
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    pic
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{currentUser?.displayName}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Student
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Subscription</MenuItem>
              <MenuDivider />
              <MenuItem  onClick={()=>{
              SignOut()
              console.log('DONE')
              navigate('/');
              }}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

