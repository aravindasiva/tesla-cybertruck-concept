import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, softShadows } from '@react-three/drei'
import Model from '../components/model'
import { Box } from '@chakra-ui/react'
import ModelContainer from '../containers/ModelContainer'
import UnderlayContainer from '../containers/UnderlayContainer'

const Home = () => {
  return (
    <Box>
      <UnderlayContainer>
      <ModelContainer/>
      </UnderlayContainer>
    </Box>
  )
}

export default Home
