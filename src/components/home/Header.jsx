import React from 'react'
import { Heading, HStack, Image, Progress, Stack, Text, Button, Divider } from '@chakra-ui/react'
import { BsStar, BsFillChatDotsFill, BsTwitch } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'


import welcometeam from '../../assets/images/top.png'
const Header = () => {
    return (
        <Stack margin={'0px !important'} width={'100%'} bgColor={'#000000e3'} textColor={'white'} >
            <Stack direction={'row'} height={'100%'} justifyContent={'space-between'} >
                {/* Left div */}
                <Stack width={{ base: '100%', lg: '50%' }}   >
                    <Stack width={{ base: '100%', lg: '70%' }} px={'10'} py={'16'} >
                        <Heading color={'white'} fontSize='lg' pb={'2'} lineHeight={'1.5'} fontWeight={'700'} >
                            Welcome back, Sohaib57
                        </Heading>
                        <Stack>
                            <HStack justifyContent={'space-between'} color={'#fff'} lineHeight={'1.5'} fontWeight={'600'} >
                                <Text>
                                    Your VIP Progress
                                </Text>
                                <Text>
                                    0.00%
                                </Text>
                            </HStack>

                            <Progress borderRadius="1rem" bg={'#fff'} />

                            <HStack justifyContent={'space-between'} fontWeight={'600'} >

                                <HStack>
                                    <BsStar color='#2F4553' fontSize={'20px'} />
                                    <Text color={'#b1bad3'} > None </Text>
                                </HStack>

                                <HStack>
                                    <BsStar color='#BA9469' fontSize={'20px'} />
                                    <Text color={'#b1bad3'} >   Bronze </Text>
                                </HStack>

                            </HStack>
                        </Stack>
                    </Stack>
                    {/* <Stack justifyContent={'center'} width={{ base: '100%', lg: '70%' }} px={'10'} py={'16'} >

                        <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'} >
                            Play Smarter
                        </Text>
                        <Button borderRadius='full' bg={'#007bff'} hover={{ backgroundColor: '#0F212E' }}>
                            Register Smartly
                        </Button>
                        <Stack px={'10'} alignItems={'baseline'} direction={'row'} w={'100%'} textAlign={'center'}>
                            <Divider borderColor={'gray'} />
                            <Text color={'white'} marginBottom={'0 !important'}>
                                OR
                            </Text>
                            <Divider borderColor={'gray'} />
                        </Stack>

                        <Stack justifyContent={'space-between'} direction={'row'}>
                            <Stack
                                _hover={{ cursor: 'pointer', opacity: '0.7' }}
                                borderRadius={'sm'}
                                bgColor={'#2F4553'}
                                w={'25%'}
                                alignItems={'center'}
                                py={'3'}
                            >
                                <FaFacebookF color="#FFFFFF" fontSize={'1.2rem'} />
                            </Stack>
                            <Stack
                                _hover={{ cursor: 'pointer', opacity: '0.7' }}
                                borderRadius={'sm'}
                                bgColor={'#2F4553'}
                                w={'25%'}
                                alignItems={'center'}
                                py={'3'}
                            >
                                <FaGoogle color="#FFFFFF" fontSize={'1.2rem'} />
                            </Stack>
                            <Stack
                                _hover={{ cursor: 'pointer', opacity: '0.7' }}
                                borderRadius={'sm'}
                                bgColor={'#2F4553'}
                                w={'25%'}
                                alignItems={'center'}
                                py={'3'}
                            >
                                <BsFillChatDotsFill color="#FFFFFF" fontSize={'1.2rem'} />
                            </Stack>
                            <Stack
                                _hover={{ cursor: 'pointer', opacity: '0.7' }}
                                borderRadius={'sm'}
                                bgColor={'#2F4553'}
                                w={'25%'}
                                alignItems={'center'}
                                py={'3'}
                            >
                                <BsTwitch color="#FFFFFF" fontSize={'1.2rem'} />
                            </Stack>
                        </Stack>
                    </Stack> */}



                </Stack>

                {/* Right div with a background */}
                <Stack display={{ base: 'none', lg: 'flex' }} mr={'12 !important'} width={'45%'} >
                    <Stack margin={'0px !important'} width={'100%'} height={'100%'} >
                        <Image height={'full'} width={'full'} src={welcometeam} />

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Header