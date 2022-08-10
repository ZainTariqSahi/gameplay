import React from 'react'
import { useNavigate } from "react-router-dom";
import { Stack, Img, Text, SimpleGrid, Heading } from '@chakra-ui/react'
import './BlogCard.css'

const PromotionBlogCard = ({ text, heading, img, link, description }) => {
    const nav = useNavigate();
    return (
        <Stack margin={'0px !important'} onClick={() => nav(link)}>
            <Img borderRadius={'md'} src={img} className='arrow' />
            <Text color={'#A2ACC4'} >
                {text}
            </Text>
            <Heading fontSize={'2xl'} color={'#FFFFFF'} >
                {heading}
            </Heading>
            <Text color={'#A2ACC4'} >
                {description}
            </Text>
        </Stack>
    )
}

export default PromotionBlogCard