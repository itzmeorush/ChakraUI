import { Box, Stack,VStack,Heading, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p={'16'} color={'white'}>
     <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'}>Subscribe to get update</Heading>
        <HStack>
            <Input placeholder='Enter Email here..'  border={'none'} outline={'none'} focusBorderColor={'none'} borderRadius={'none'} borderBottom={'2px solid white'}/>
            <Button colorScheme='purple' p={'0'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend/>
            </Button>
        </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
        <Heading size={'md'} textAlign={'center'} textTransform={'uppercase'}>Video hub</Heading>
        <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="" target={'blank'}>Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="" target={'blank'}>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="" target={'blank'}>Linkedin</a>
                </Button>
        </VStack>
     </Stack>
    </Box>
  )
}

export default Footer
