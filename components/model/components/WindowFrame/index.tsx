import React from 'react'

export default function WindowFrame({geometry, material}) {
    return (
        <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        position={[0, -0.02, 0]}
        rotation={[-1.57, 0, -0.81]}
      />
    )
}
