import { Box, Button, Center, Flex, HStack, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import HeaderComponent from '../HeaderComponent'
import CyberTruckLogo from '../svg/CyberTruckLogo'
import TeslaWord from '../svg/TeslaWord'
import Text, { TextStyles } from '../Text'
import { FaHeart } from 'react-icons/fa'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Underlay = (props) => {
  return (
    <>
      <HeaderComponent />
      <Center>
        <Box pt={6} >
          <CyberTruckLogo />
        </Box>
      </Center>
      <Box zIndex={1} w='100vw' minH={10} position='fixed' bottom={0}>
        <Center>
          <HStack p={0}>
            <Text textStyle={TextStyles.heading} fontSize={10} color='#000'>Concept made with</Text>
            <Icon as={FaHeart} _hover={{ color: 'red' }} _focus={{ outline: 'none' }} _active={{ outline: 'none' }} boxSize={3} color='#000' />
            <Link href="https://github.com/aravindasiva" isExternal>
              <Text textStyle={TextStyles.heading} fontSize={10} _hover={{ color: 'blue' }} color='#000'>Aravind Cva</Text>
            </Link>
            <Box position='fixed' right={10} mr={10}>
              <Link href="https://github.com/aravindasiva" isExternal>
                <Icon as={AiFillGithub} _hover={{ color: '#575757' }} _focus={{ outline: 'none' }} _active={{ outline: 'none' }} boxSize={25} color='#000' mr={4}/>
              </Link>
              <Link href="https://www.instagram.com/aravind_cva/" isExternal>
                <Icon as={AiFillInstagram} _hover={{ color: '#575757' }} _focus={{ outline: 'none' }} boxSize={25} color='#000' mr={4}/>
              </Link>
              <Link href="https://www.linkedin.com/in/aravindasiva/" isExternal>
                <Icon as={AiFillLinkedin} _hover={{ color: '#575757' }} _focus={{ outline: 'none' }} boxSize={25} color='#000' mr={4}/>
              </Link>
            </Box>
          </HStack>
        </Center>
      </Box>

      <Flex
        // align="center"
        justify="space-between"
        wrap="wrap"
        padding={3}
        color="black"
        {...props}
      >
        <Flex align="center">
          <Box display={{ base: "none", md: "block" }}>
            <Text ml={20} textStyle={TextStyles.heading} fontSize={90} >YOU</Text>
            <Text ml={20} textStyle={TextStyles.title} fontSize={100}>CHOOSE</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
export default Underlay