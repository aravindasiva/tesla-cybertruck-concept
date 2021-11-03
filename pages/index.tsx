import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, softShadows } from '@react-three/drei'
import Model from '../components/model'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box zIndex={1} w="full" h="100vh" bg="gray.background" p={[2, 4, 8]}>
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, zoom: 0.5 }} style={{ position: 'absolute', left: 0, top: 0, bottom: 0 }}>
      <Suspense fallback={null}>
        <Model position={[0, -0.7, 0]} />
      </Suspense>
      <OrbitControls autoRotate={false} />
    </Canvas>
    </Box>
  )
}

export default Home
