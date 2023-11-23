import styles from '../../styles/Pages.module.css';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Img,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios';
import useSWR from 'swr';
import { useEffect } from 'react';


const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}
export default function New({ navigateToPage }) {

  const fetcher = (key) => localStorage.getItem(key)

  const { data, error } = useSWR("token", fetcher);


  return (
    <>
      <div className={styles.container} style={{ padding: 0 }}>

        <Stack w={"full"} h={10} direction={"row-reverse"} justifyContent={"space-between"} alignItems={"end"} display={"flex"}>
          <Avatar
            rounded={'full'}
            cursor={'pointer'}
            minW={0}
            size={'sm'}
            marginRight={2}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Button
            variant={'solid'}
            colorScheme={'red'}
            size={'sm'}
            p={4}
            marginLeft={2}
            leftIcon={<AddIcon />}>
            LogOut
          </Button>
        </Stack>

        <Stack>
          <Stack bg={"black"} h={10} marginTop={5} opacity={".5"} display={"flex"} justifyContent={"center"} alignItems={"end"} rounded={"2"}>
            <Spinner marginRight={3} />
          </Stack>
        </Stack>
      </div>
    </>
  )
}