import React from 'react'

export default function Body({ geometry, material, color }) {
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
        name='body'
        color={color}
        roughness={0.7}
        metalness={1}
        reflectivity={0.7}
        clearcoat={0.2}
        clearcoatRoughness={0.2}
      />
    </mesh>
  )
}
