import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack, HStack, VStack
  } from '@chakra-ui/react'

  import {Link} from 'react-router-dom'
  import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      <Button pos={'fixed'} zIndex={1} top={4} left={4} colorScheme='purple' p={0} w={10} h={10} borderRadius={'full'} onClick={onOpen}>
        <BiMenuAltLeft size={'20'}/>
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>
                    VideoHub
                </DrawerHeader>
                <VStack>
                    <Button onClick={onClose}  colorScheme='purple' variant={'ghost'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/video'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/videos?category=free'}>Free videos</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={'10'} left={'0'} justifyContent={'space-evenly'} w={'full'}>

                <Button onClick={onClose} colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                        <Link to={'/signup'}>Sign up</Link>
                    </Button>
                </HStack>
            </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Header
