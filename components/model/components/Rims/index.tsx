import React from 'react'

export default function Rims({ geometry, material, color }) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      material={material}
      position={[0, -0.02, 0]}
      rotation={[-1.57, 0, -0.81]}
    >
      <meshPhysicalMaterial
        name='rims'
        color={color}
        roughness={0.3}
        metalness={1}
        reflectivity={0.1}
        clearcoat={1}
        clearcoatRoughness={0.2}
      />
    </mesh>
  )
}
