import React, { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage, softShadows } from '@react-three/drei'
import { Box } from '@chakra-ui/react'
import Model, { Picker } from '../../components/model'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import HeaderComponent from '../../components/HeaderComponent'

const ModelContainer = () => {

  return (
    <Box zIndex={2} w="100wh" h="100vh" pt='6%'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, zoom: 1.2 }}>
        <Suspense fallback={null}>
          <Model position={[0, -0.7, 0]} />
        </Suspense>
        <OrbitControls autoRotate={false} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} />
      </Canvas>
      <Picker />
    </Box>
  )
}

export default ModelContainer
