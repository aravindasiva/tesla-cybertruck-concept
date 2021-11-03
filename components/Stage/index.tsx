import { BakeShadows, softShadows } from "@react-three/drei"

export function Stage() {
    return (
      <>
        {/* Fill */}
        <ambientLight intensity={1.2} />
        {/* Main */}
        <directionalLight
          position={[1, 10, -3]}
          intensity={1}
          shadow-camera-far={70}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        {/* Strip */}
        <directionalLight position={[-10, -10, 2]} intensity={3} />
        {/* Ground */}
        <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
        {/* This freezes the shadow map, which is fast, but the model has to be static  */}
        <BakeShadows />
      </>
    )
  }
  
  // Percentage closer soft shadows, normally *very* expensive
//   softShadows()