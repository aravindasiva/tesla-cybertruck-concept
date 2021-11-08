import { Box, Center } from '@chakra-ui/layout'
import React from 'react'
import HeaderComponent from '../HeaderComponent'
import CyberTruckLogo from '../svg/CyberTruckLogo'

const Underlay = () => {
  return (
    <>
      <HeaderComponent />
      <Center>
        <Box pt={6}>
          <CyberTruckLogo />
        </Box>
      </Center>
    </>
  )
}
export default Underlay