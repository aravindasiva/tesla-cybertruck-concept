import React from 'react'
import * as THREE from 'three'

export default function Glass({ geometry, color }) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      // material={material}
      position={[0, -0.02, 0]}
      rotation={[-1.57, 0, -0.81]}
    >
      <meshPhysicalMaterial
        side={THREE.DoubleSide}
        depthWrite={false}
        name='glass'
        color={color}
        transparent={true}
        opacity={0.95}
        roughness={0.4}
        metalness={0.8}
        envMapIntensity={0.9}
        clearcoat={0.5}
        reflectivity={0.2}
        refractionRatio={0.4}
        ior={0.9}
      >
      </meshPhysicalMaterial>
    </mesh>
  )
}
