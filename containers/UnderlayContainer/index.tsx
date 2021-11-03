import React from 'react'
import {
  Box,
  Center,
  Flex,
  Text
} from '@chakra-ui/react'
import Underlay from '../../components/Underlay'

const UnderlayContainer = ({ children }) => {
  return (
    <>
      <Box w='full' h='100vh'>
        <Box position='absolute' top={0} bottom={0} right={0} left={0} bg='#E8E7EA'>
          <Underlay />
        </Box>
        {children}
      </Box>
    </>
  )
}

export default UnderlayContainer
