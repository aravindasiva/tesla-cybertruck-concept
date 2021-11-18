import React from 'react'

export default function MainLights({geometry, material}) {
    return (
        <mesh
        visible={true}
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        position={[0, -0.02, 0]}
        rotation={[-1.57, 0, -0.81]}
      />
    )
}
