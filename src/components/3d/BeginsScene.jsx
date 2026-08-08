import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function BeginsScene({ scrollProgress = 0 }) {
  const snowRef = useRef();
  const beginsBgTexture = useTexture('/assets/begins-bg.jpg');

  // Himalayan Peak geometry approximations
  const peaks = useMemo(() => {
    const list = [];
    for (let i = 0; i < 14; i++) {
      list.push({
        id: i,
        x: (Math.random() - 0.5) * 80,
        z: -20 - Math.random() * 60,
        height: 25 + Math.random() * 35,
        radius: 8 + Math.random() * 12
      });
    }
    return list;
  }, []);

  // Snow Particles
  const snowCount = 800;
  const [snowPositions, snowVel] = useMemo(() => {
    const pos = new Float32Array(snowCount * 3);
    const vel = new Float32Array(snowCount * 2);
    for (let i = 0; i < snowCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = Math.random() * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      vel[i * 2] = 0.1 + Math.random() * 0.2; // Y speed
      vel[i * 2 + 1] = (Math.random() - 0.5) * 0.1; // X sway
    }
    return [pos, vel];
  }, [snowCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (snowRef.current) {
      const pos = snowRef.current.geometry.attributes.position.array;
      for (let i = 0; i < snowCount; i++) {
        pos[i * 3 + 1] -= snowVel[i * 2];
        pos[i * 3] += Math.sin(time + i) * 0.02;
        if (pos[i * 3 + 1] < -5) {
          pos[i * 3 + 1] = 40;
        }
      }
      snowRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -10, -30]}>
      <ambientLight intensity={0.2} color="#94a3b8" />
      <pointLight position={[0, 15, 10]} intensity={1.5} color="#d4af37" distance={40} />

      {/* 3D Batman Begins Poster Mesh */}
      <mesh position={[0, 15, -45]}>
        <planeGeometry args={[110, 70]} />
        <meshBasicMaterial map={beginsBgTexture} transparent opacity={0.85} depthWrite={false} />
      </mesh>

      {/* Snowy Himalayan Mountain Peaks */}
      {peaks.map((p) => (
        <mesh key={p.id} position={[p.x, p.height / 2 - 10, p.z]}>
          <coneGeometry args={[p.radius, p.height, 5]} />
          <meshStandardMaterial color="#1e293b" roughness={0.9} />
        </mesh>
      ))}

      {/* Monastery Temple Pillars */}
      {[-8, -4, 4, 8].map((x, i) => (
        <group key={i} position={[x, 0, -10]}>
          <mesh position={[0, 6, 0]}>
            <cylinderGeometry args={[0.6, 0.8, 12, 8]} />
            <meshStandardMaterial color="#0f172a" roughness={0.8} />
          </mesh>
          <mesh position={[0, 12, 0]}>
            <boxGeometry args={[1.5, 0.6, 1.5]} />
            <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
          </mesh>
        </group>
      ))}

      {/* Floating Snow & Fire Embers */}
      <points ref={snowRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={snowCount}
            array={snowPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.25} color="#e2e8f0" transparent opacity={0.7} />
      </points>
    </group>
  );
}
