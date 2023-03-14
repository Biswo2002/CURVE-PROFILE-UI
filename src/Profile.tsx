import { Box, Text, Image, Center, HStack } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const Menu = [
    {
        id: '1',
        img: 'https://cdn-icons-png.flaticon.com/512/1384/1384172.png',
        icon: 'https://cdn-icons-png.flaticon.com/512/9378/9378048.png',
        title: 'Instagram',
    },
    {
        id: '2',
        img: 'https://cdn-icons-png.flaticon.com/512/1384/1384075.png',
        icon: 'https://cdn-icons-png.flaticon.com/512/9378/9378048.png',
        title: 'Twitter',
    },
    {
        id: '3',
        img: 'https://cdn-icons-png.flaticon.com/512/747/747543.png',
        icon: 'https://cdn-icons-png.flaticon.com/512/9378/9378048.png',
        title: 'Facebook',
    },
    {
        id: '4',
        img: 'https://cdn-icons-png.flaticon.com/512/1384/1384171.png',
        icon: 'https://cdn-icons-png.flaticon.com/512/9378/9378048.png',
        title: 'Linkedin',
    },
    {
        id: '5',
        img: 'https://cdn-icons-png.flaticon.com/512/1384/1384072.png',
        icon: 'https://cdn-icons-png.flaticon.com/512/9378/9378048.png',
        title: 'Indeed',
    },
    {
        id: '6',
        img: 'https://cdn-icons-png.flaticon.com/512/1384/1384070.png',
        icon: 'https://cdn-icons-png.flaticon.com/512/9378/9378048.png',
        title: 'You Tube',
    },
]

const Profile = () => {
    return (
        <Box bgColor={'#fff'} flex={'1'} >
            <Box
                bgColor={'rose.500'}
                height={Dimensions.get('window').height / 3}
                borderBottomRightRadius={'1550'}
            >
                <Box
                    py={5}
                    px={3}
                    bgColor={'#fff'}
                    borderBottomRadius={'200'}
                    shadow={'4'}
                >
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9684/9684706.png' }} alt={''}
                        size={'6'}
                        m={4}
                    />
                    <Center>
                        <Box
                            justifyContent={'center'}
                            alignItems={'center'}
                            shadow={5}
                            bgColor={'#fff'}
                            borderRadius={'full'}
                            size={'24'}
                            mb={4}
                            mt={'-6'}
                        >
                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2347/2347299.png' }} alt={''}
                                size={'20'}
                            />
                        </Box>
                    </Center>
                    <Text
                        textAlign={'center'}
                        fontSize={'xl'}
                        color={'blue.900'}
                        bold
                        mb={'4'}
                    >
                        Biswopaban Nayak
                    </Text>
                </Box>
            </Box>
            {
                Menu.map(item => (
                    <HStack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        bgColor={'#fff'}
                        shadow={'2'}
                        p={4}
                        // mt={4}
                        m={4}
                        // mb={4}
                        borderRadius={'lg'}
                    >
                        <HStack
                            alignItems={'center'}
                        >
                            <Image source={{ uri: item?.img }} alt={''}
                                size={'5'}
                                ml={'1'}
                            />
                            <Text
                                ml={6}
                                fontSize={'lg'}
                                bold
                                color={'blue.900'}
                            >
                                {item?.title}
                            </Text>
                        </HStack>
                        <Image source={{ uri: item?.icon }} alt=''
                            size={'6'}
                            mr={'2'}
                        />
                    </HStack>
                ))
            }
        </Box>
    )
}

export default Profile

const styles = StyleSheet.create({})