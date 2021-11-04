import React, { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, softShadows } from '@react-three/drei'
import { Box } from '@chakra-ui/react'
import Model from '../../components/model'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const ModelContainer = () => {

  return (
    <Box zIndex={2} w="100wh" h="100vh">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, zoom: 0.5 }}>
        <Suspense fallback={null}>
          <Model position={[0, -0.7, 0]} />
        </Suspense>
        <OrbitControls autoRotate={false} />
      </Canvas>
    </Box>
  )
}

export default ModelContainer
