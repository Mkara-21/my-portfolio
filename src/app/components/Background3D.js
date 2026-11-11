'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Float, Sparkles } from '@react-three/drei';

function MovingElements() {
  const group = useRef();
  
  // Slowly rotates the entire group of objects every frame
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.05;
    group.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={group}>
      {/* Ambient floating dust particles in rose gold */}
      <Sparkles count={150} scale={15} size={2} speed={0.4} opacity={0.6} color="#b76e79" />
      
      {/* Floating Metallic Pink Torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[3, 1, -3]}>
          <torusKnotGeometry args={[1.2, 0.3, 100, 16]} />
          <meshStandardMaterial color="#d88c9a" wireframe />
        </mesh>
      </Float>

      {/* Floating Maroon Icosahedron */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-3, -1, -4]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#800000" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Background3D() {
  return (
    // Fixed positioning keeps it permanently pinned to the background
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <MovingElements />
      </Canvas>
    </div>
  );
}