import React from 'react'
import { Container, Heading, VStack, Input, Button,Text, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>
    <form>
      <VStack m={'auto'} spacing={'8'} w={['full','96']} my={'16'} alignItems={"stretch"}>
          {/* <Heading color={'GrayText'}>Welcome Back</Heading> */}
          <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
          <Input required placeholder='Name' focusBorderColor={'purple.500'} type={'Name'}/>
          <Input required placeholder='Email' type={'email'}  focusBorderColor={'purple.500'} />
          <Input required placeholder='Password' type={'password'}  focusBorderColor={'purple.500'} />
         
          <Button  colorScheme={'purple'} type='submit'>
              Sign Up
          </Button>

          <Text textAlign={'right'}>Already signed Up? {' '}
          <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
          </Button>
          </Text>

      </VStack>
    </form>
  </Container>
  )
}

export default Signup
