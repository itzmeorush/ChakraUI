import { Container, Heading, VStack, Input, Button,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      <form>
        <VStack m={'auto'} spacing={'8'} w={['full','96']} my={'16'} alignItems={"stretch"}>
            <Heading color={'GrayText'}>Welcome Back</Heading>
            <Input required placeholder='Email' focusBorderColor={'purple.500'} type={'email'}/>
            <Input required placeholder='Password' type={'password'}  focusBorderColor={'purple.500'} />
            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'./forgetpassword'}>Forget Password</Link>
            </Button>
            <Button  colorScheme={'purple'} type='submit'>
                Log In
            </Button>

            <Text textAlign={'right'}>New User? {' '}
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
            </Text>

        </VStack>
      </form>
    </Container>
  )
}

export default Login
