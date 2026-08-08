import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function GothamHeroScene({ scrollProgress = 0 }) {
  const groupRef = useRef();
  const rainRef = useRef();
  const batsRef = useRef();
  const searchlightRef1 = useRef();
  const searchlightRef2 = useRef();

  // Load custom Batman artwork texture
  const heroBgTexture = useTexture('/assets/hero-bg.jpg');

  // Generate procedural Gotham Skyscraper buildings
  const buildings = useMemo(() => {
    const list = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 120;
      const z = -Math.random() * 100 - 10;
      const height = 15 + Math.random() * 45;
      const width = 4 + Math.random() * 8;
      const depth = 4 + Math.random() * 8;
      const windowDensity = Math.floor(Math.random() * 5) + 3;
      list.push({ id: i, x, z, height, width, depth, windowDensity });
    }
    return list;
  }, []);

  // Generate Volumetric Rain Particles
  const rainCount = 1200;
  const [rainPositions, rainVelocities] = useMemo(() => {
    const pos = new Float32Array(rainCount * 3);
    const vel = new Float32Array(rainCount);
    for (let i = 0; i < rainCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = Math.random() * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
      vel[i] = 0.4 + Math.random() * 0.6;
    }
    return [pos, vel];
  }, [rainCount]);

  // Generate Bat Swarm Particles
  const batCount = 180;
  const [batPositions, batAngles] = useMemo(() => {
    const pos = new Float32Array(batCount * 3);
    const angles = new Float32Array(batCount * 3);
    for (let i = 0; i < batCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = 10 + Math.random() * 25;
      pos[i * 3 + 2] = -5 - Math.random() * 40;
      angles[i * 3] = Math.random() * Math.PI * 2; // phase angle
      angles[i * 3 + 1] = 0.5 + Math.random() * 1.5; // speed multiplier
      angles[i * 3 + 2] = 2 + Math.random() * 6; // radius
    }
    return [pos, angles];
  }, [batCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Animate Rain
    if (rainRef.current) {
      const positions = rainRef.current.geometry.attributes.position.array;
      for (let i = 0; i < rainCount; i++) {
        positions[i * 3 + 1] -= rainVelocities[i];
        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 50;
        }
      }
      rainRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Animate Bats in Swarm Spiral
    if (batsRef.current) {
      const positions = batsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < batCount; i++) {
        const speed = batAngles[i * 3 + 1];
        const radius = batAngles[i * 3 + 2];
        const angle = time * speed + batAngles[i * 3];

        positions[i * 3] += Math.sin(angle) * 0.08;
        positions[i * 3 + 1] += Math.cos(time * 2 + i) * 0.04;
        positions[i * 3 + 2] += Math.cos(angle) * 0.08;
      }
      batsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 3. Searchlights Scanning Gotham Sky
    if (searchlightRef1.current) {
      searchlightRef1.current.rotation.z = Math.sin(time * 0.8) * 0.4 - 0.2;
      searchlightRef1.current.rotation.x = Math.cos(time * 0.6) * 0.2;
    }
    if (searchlightRef2.current) {
      searchlightRef2.current.rotation.z = Math.cos(time * 0.7) * 0.4 + 0.2;
      searchlightRef2.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }

    // Move Gotham group based on continuous scroll progress
    if (groupRef.current) {
      groupRef.current.position.z = scrollProgress * 40;
      groupRef.current.position.y = -scrollProgress * 15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dark Sky Ambiance & Volumetric Searchlights */}
      <ambientLight intensity={0.15} color="#101827" />
      <directionalLight position={[10, 30, 20]} intensity={0.6} color="#d4af37" />
      <directionalLight position={[-20, 40, -10]} intensity={0.4} color="#3b82f6" />
      <fog attach="fog" args={['#050608', 15, 90]} />

      {/* 3D Hero Background Poster Mesh */}
      <mesh position={[0, 10, -55]}>
        <planeGeometry args={[120, 80]} />
        <meshBasicMaterial map={heroBgTexture} transparent opacity={0.85} depthWrite={false} />
      </mesh>

      {/* Gotham Searchlights */}
      <group position={[-15, 0, -30]} ref={searchlightRef1}>
        <mesh position={[0, 25, 0]}>
          <coneGeometry args={[4, 50, 16, 1, true]} />
          <meshBasicMaterial color="#fef08a" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
      </group>
      <group position={[20, 0, -40]} ref={searchlightRef2}>
        <mesh position={[0, 25, 0]}>
          <coneGeometry args={[5, 55, 16, 1, true]} />
          <meshBasicMaterial color="#e0f2fe" transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Buildings Matrix */}
      {buildings.map((b) => (
        <group key={b.id} position={[b.x, b.height / 2 - 10, b.z]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[b.width, b.height, b.depth]} />
            <meshStandardMaterial color="#0b0e14" roughness={0.7} metalness={0.5} />
          </mesh>
          {/* Lit Window Accents */}
          <mesh position={[0, 0, b.depth / 2 + 0.05]}>
            <planeGeometry args={[b.width * 0.8, b.height * 0.8]} />
            <meshBasicMaterial color="#fbbf24" transparent opacity={b.id % 2 === 0 ? 0.25 : 0.08} />
          </mesh>
        </group>
      ))}

      {/* Monumental Batman Silhouette Foreground Mesh */}
      <group position={[0, -2, -6]}>
        {/* Cloak & Cape geometry */}
        <mesh position={[0, 2.5, 0]}>
          <coneGeometry args={[2.2, 5, 8]} />
          <meshStandardMaterial color="#040507" roughness={0.9} metalness={0.2} />
        </mesh>
        {/* Cowl Head & Ears */}
        <mesh position={[0, 5.2, 0]}>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial color="#080a0f" roughness={0.8} />
        </mesh>
        {/* Left Ear */}
        <mesh position={[-0.35, 6.0, 0]} rotation={[0, 0, 0.1]}>
          <coneGeometry args={[0.15, 0.9, 4]} />
          <meshStandardMaterial color="#080a0f" />
        </mesh>
        {/* Right Ear */}
        <mesh position={[0.35, 6.0, 0]} rotation={[0, 0, -0.1]}>
          <coneGeometry args={[0.15, 0.9, 4]} />
          <meshStandardMaterial color="#080a0f" />
        </mesh>
        {/* Glowing eyes */}
        <mesh position={[-0.2, 5.3, 0.6]}>
          <boxGeometry args={[0.15, 0.04, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.2, 5.3, 0.6]}>
          <boxGeometry args={[0.15, 0.04, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Rain Particle System */}
      <points ref={rainRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={rainCount}
            array={rainPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#94a3b8"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Bat Swarm Particle System */}
      <points ref={batsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={batCount}
            array={batPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.4}
          color="#1e293b"
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
}
