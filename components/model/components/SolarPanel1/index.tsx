import React from 'react'

export default function SolarPanel1({ geometry, color }) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      position={[0, -0.02, 0]}
      rotation={[-1.57, 0, -0.81]}
    >
      <meshPhysicalMaterial
        name='solar1'
        color={color}
        roughness={0.3}
      />
    </mesh>
  )
}
