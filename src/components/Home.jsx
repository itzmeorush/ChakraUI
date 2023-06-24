import { Box, Container, Heading,  Stack, HStack, VStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const HeadingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4'

}

const Home = () => {
  return (
    <Box>
   <MyCarousel/>
   <Container minH={'100vh'} maxW={'container.xl'} pt={'30'} >
    <Heading textTransform={'uppercase'} pt={['0','8']} w={'fit-content'} mx={'auto'} borderBottom={"2px solid"}>Services</Heading>
    <Stack h={'full'} pb={'40'} alignItems={'center'} mt={'40px'} justifyContent={'center'} direction={['column', 'row']}>
   <Image src={img5} filter={'hue-rotate(120deg)'} h={['40','300']}/>
   <Text letterSpacing={'widest'} lineHeight={"190%"} w={"50%"} p={['4', '30']} textAlign={'justify'}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis laudantium incidunt ea animi sapiente aspernatur velit explicabo quam, corporis commodi sequi? Nostrum, possimus porro! Sit at porro provident iste! Necessitatibus, officiis ipsa nam tempore quam debitis unde quia, voluptate adipisci quas maiores est. Quae pariatur explicabo, nulla hic ratione dolorum recusandae quia voluptatum ullam odio amet eligendi ex iure, nobis consectetur nostrum sint asperiores facilis fugiat cupiditate qui perferendis quod saepe. Dignissimos facilis earum, quas vero doloribus laudantium numquam a obcaecati soluta maiores, expedita iste mollitia eligendi tenetur vitae? Libero similique odit voluptatem aliquid nesciunt est voluptatum aspernatur id commodi!
   </Text>
    </Stack>
   </Container>
    </Box>
  )
};

const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false} interval={1000}>
        <Box w={"full"} h={'100vh'}>
            <img src={img1} alt="" />
            <Heading {...HeadingOptions} bgColor={'blackAlpha.400'} color={'white'}> Watch The Future</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img2} alt="" />
            <Heading {...HeadingOptions} bgColor={'blackAlpha.200'} color={'white'}> Future is Gaming</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img3} alt="" />
            <Heading {...HeadingOptions} bgColor={'blackAlpha.200'} color={'white'}> Game Mania</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img4} alt="" />
            <Heading {...HeadingOptions} bgColor={'blackAlpha.200'} color={'white'}> Night life is cool</Heading>
        </Box>
        
    </Carousel>
  )
};



export default Home
