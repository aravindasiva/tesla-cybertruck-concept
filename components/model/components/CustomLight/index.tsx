import { BakeShadows, softShadows } from "@react-three/drei"

export function CustomLight() {
  return (
    <>
      {/* Fill */}
      {/* <ambientLight intensity={1.2} /> */}
      {/* Main */}
      {/* <directionalLight
        position={[25, 25, 1]}
        intensity={1}
        shadow-camera-far={20}
        shadow-camera-left={10}
        shadow-camera-right={-10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-mapSize={[512, 512]}
        castShadow
      />

      <hemisphereLight position={[15, -10, 3]} intensity={1} /> */}

      {/* Strip */}
      <directionalLight position={[15, -10, 3]} intensity={1} />

      {/* less intense light for shadow side so its not too dark */}
      {/* <directionalLight position={[-25, 20, -10]} intensity={0.2} /> */}

      {/* Ground */}
      {/* <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.1} />
      </mesh> */}
      {/* This freezes the shadow map, which is fast, but the model has to be static  */}
      {/* <BakeShadows /> */}
    </>
  )
}

  // Percentage closer soft shadows, normally *very* expensive
//   softShadows()