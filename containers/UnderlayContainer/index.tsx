import React from 'react'
import {
  Box,
  Center,
  Flex,
  Text
} from '@chakra-ui/react'
import Underlay from '../../components/Underlay'
import HeaderComponent from '../../components/HeaderComponent'

const UnderlayContainer = ({ children }) => {
  return (
    <>
      <Box w='full' h='100vh'>
        <Box position='absolute' top={0} bottom={0} right={0} left={0} bg='#E7E7EA' >
          {/* <Box position='absolute' top={0} bottom={0} right={0} left='80%' bg='#151f27' /> */}
          <Underlay />
        </Box>
        {children}
      </Box>
    </>
  )
}

export default UnderlayContainer
// linear-gradient(to left, #E7E7EA 70%, #151f27 )