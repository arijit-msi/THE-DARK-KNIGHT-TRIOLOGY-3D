import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function RisesScene() {
  const ashRef = useRef();
  const cowlRef = useRef();
  const risesBgTexture = useTexture('/assets/rises-bg.jpg');

  // Crumbled bridge piers & debris
  const debris = useMemo(() => {
    const list = [];
    for (let i = 0; i < 18; i++) {
      list.push({
        id: i,
        x: (Math.random() - 0.5) * 50,
        z: -10 - Math.random() * 40,
        y: (Math.random() - 0.5) * 5,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        size: 1.5 + Math.random() * 4.5
      });
    }
    return list;
  }, []);

  // Ash & Snow Storm Particles
  const ashCount = 700;
  const [ashPositions, ashVelocities] = useMemo(() => {
    const pos = new Float32Array(ashCount * 3);
    const vel = new Float32Array(ashCount * 2);
    for (let i = 0; i < ashCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = Math.random() * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
      vel[i * 2] = 0.15 + Math.random() * 0.3; // Y speed
      vel[i * 2 + 1] = (Math.random() - 0.5) * 0.2; // X drift
    }
    return [pos, vel];
  }, [ashCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ashRef.current) {
      const pos = ashRef.current.geometry.attributes.position.array;
      for (let i = 0; i < ashCount; i++) {
        pos[i * 3 + 1] -= ashVelocities[i * 2];
        pos[i * 3] += ashVelocities[i * 2 + 1];
        if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 35;
      }
      ashRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (cowlRef.current) {
      cowlRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group position={[0, -8, -25]}>
      {/* Cold Ice Blue & Ash Ambiance */}
      <ambientLight intensity={0.2} color="#1e3a8a" />
      <directionalLight position={[10, 20, 10]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[0, 5, 5]} intensity={1} color="#93c5fd" distance={25} />

      {/* 3D Dark Knight Rises Poster Mesh */}
      <mesh position={[0, 10, -45]}>
        <planeGeometry args={[115, 75]} />
        <meshBasicMaterial map={risesBgTexture} transparent opacity={0.85} depthWrite={false} />
      </mesh>

      {/* Cracked Pedestal with Broken Cowl Geometry */}
      <group ref={cowlRef} position={[0, 0, -8]}>
        {/* Pedestal */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[2, 2.5, 3, 8]} />
          <meshStandardMaterial color="#1e293b" roughness={0.9} />
        </mesh>
        {/* Broken Mask/Cowl symbol */}
        <mesh position={[0, 1.2, 0]} rotation={[0.4, 0.2, -0.2]}>
          <sphereGeometry args={[1, 16, 16, 0, Math.PI * 1.5, 0, Math.PI * 0.8]} />
          <meshStandardMaterial color="#0b0f19" roughness={0.8} metalness={0.4} />
        </mesh>
        {/* Cowl ears */}
        <mesh position={[-0.4, 2.2, -0.1]} rotation={[0, 0, 0.15]}>
          <coneGeometry args={[0.2, 1.2, 4]} />
          <meshStandardMaterial color="#0b0f19" />
        </mesh>
        <mesh position={[0.4, 2.2, -0.1]} rotation={[0, 0, -0.15]}>
          <coneGeometry args={[0.2, 1.2, 4]} />
          <meshStandardMaterial color="#0b0f19" />
        </mesh>
      </group>

      {/* Crumbled Bridge Pillars & Concrete Ruins */}
      {debris.map((d) => (
        <mesh
          key={d.id}
          position={[d.x, d.y, d.z]}
          rotation={[d.rotX, d.rotY, 0]}
          castShadow
        >
          <boxGeometry args={[d.size, d.size * 0.6, d.size * 0.8]} />
          <meshStandardMaterial color="#0f172a" roughness={0.95} />
        </mesh>
      ))}

      {/* Ash & Snow Particles */}
      <points ref={ashRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={ashCount}
            array={ashPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.25} color="#94a3b8" transparent opacity={0.65} />
      </points>
    </group>
  );
}
