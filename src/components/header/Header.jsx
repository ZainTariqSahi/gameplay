import { Avatar, Button, IconButton, Img, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Poker from '../../assets/images/poker.png'
import Profile from '../../assets/images/profile.jpg'
import { BiChevronDown } from 'react-icons/bi'

const Header = () => {
    return (
        <>
            {/* Header Wrapper */}
            <Stack direction={'row'} justify={'space-between'} bgColor={'#1A1F26'} px={{ base: '4', md: '8', lg: '16' }} h={'16'} boxShadow={'0 10px 11px 0px #00000040'}>
                <Stack >
                    <Img src={Poker} w={'100%'} objectFit={'cover'} /> {/* App logo */}
                </Stack>
                <Stack direction={'row'} align={'center'}> {/* User Detail Wrapper */}
                    <Stack spacing={'-2'} align={'end'} display={{ base: 'none', sm: 'inherit' }}> {/* User Wrapper */}
                        <Text fontSize={'xs'} color={'white'}>Hello</Text> {/* welcome Note */}
                        <Text fontSize={'xs'} color={'#00F3FF'}>Sufyan Jatt</Text> {/* User Name */}
                    </Stack>
                    {/* User Settings Menu */}
                    <Menu>
                        <MenuButton as={IconButton} variant={'ghost'} rightIcon={<BiChevronDown color='#00F3FF' />} _hover={{}} _focus={{}} _active={{}}>
                            <Avatar size={'sm'} src={Profile} border={' 1px solid #00F3FF'} boxShadow="#13cee6 0px 0px 2px 0px, #13cee6 0px 0px 8px 0px" />
                        </MenuButton>
                    </Menu>
                    {/* Logout Profile */}
                    <Link color={'red'} textDecor={'underline'} fontSize={'sm'} display={{ base: 'none', sm: 'inherit' }}>Logout</Link>
                </Stack>
            </Stack>
        </>
    )
}

export default Header