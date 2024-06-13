import { Environment, Preload, SoftShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'

export const KLunchScene = ({ children }: { children?: ReactNode }) => {
  return (
    <Canvas shadows camera={{ position: [0, 3.5, 8], fov: 35 }}>
      {children}
      {/* Our floor that receive shadows */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 3, 0]}
        intensity={1.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <SoftShadows />
      {/* Our Environment map */}
      <Environment preset="city" />
      <Preload all />
    </Canvas>
  )
}
