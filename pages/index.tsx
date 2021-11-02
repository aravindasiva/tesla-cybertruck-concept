import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei'
import Model from '../components/model'

const Home = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 40 }} style={{ position: 'absolute', left: 0, top: 0, bottom: 0 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.5}>
          <Model position={[0, 0, 0]} />
          {/* <Shoe scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} /> */}/
        </Stage>
        <BakeShadows />
      </Suspense>
      <OrbitControls autoRotate={false} />
    </Canvas>
  )
}

export default Home
