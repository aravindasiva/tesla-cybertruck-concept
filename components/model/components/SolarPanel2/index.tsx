import React from 'react'

export default function SolarPanel2({ geometry, color }) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      position={[0, -0.02, 0]}
      rotation={[-1.57, 0, -0.81]}
    >
      <meshPhongMaterial
        name='solar2'
        color={color}
        flatShading={true}
        reflectivity={0}
      />
    </mesh>)
}
