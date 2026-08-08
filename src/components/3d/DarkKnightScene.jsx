import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Generate procedural Joker card canvas texture
function createJokerCardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Card Background
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 512, 768);

  // Border
  ctx.strokeStyle = '#9333ea';
  ctx.lineWidth = 16;
  ctx.strokeRect(20, 20, 472, 728);

  // Joker Title
  ctx.fillStyle = '#ef4444';
  ctx.font = '900 52px Cinzel, serif';
  ctx.textAlign = 'center';
  ctx.fillText('J O K E R', 256, 120);

  // Center Emblem - Joker Smile / Card
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(256, 384, 120, 0.1 * Math.PI, 0.9 * Math.PI, false);
  ctx.stroke();

  // "WHY SO SERIOUS?" Text
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '700 36px "Bebas Neue", sans-serif';
  ctx.fillText('WHY SO SERIOUS?', 256, 600);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function DarkKnightScene() {
  const cardsGroupRef = useRef();
  const batSignalBeamRef = useRef();
  const glassRef = useRef();

  const darkKnightBgTexture = useTexture('/assets/dark-knight-bg.jpg');
  const cardTexture = useMemo(() => createJokerCardTexture(), []);

  // Floating 3D Cards
  const cards = useMemo(() => {
    const list = [];
    for (let i = 0; i < 24; i++) {
      list.push({
        id: i,
        x: (Math.random() - 0.5) * 35,
        y: (Math.random() - 0.5) * 25 + 5,
        z: (Math.random() - 0.5) * 30 - 15,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02
      });
    }
    return list;
  }, []);

  // Exploding Glass Shards Particles
  const glassCount = 350;
  const [glassPositions, glassVelocities] = useMemo(() => {
    const pos = new Float32Array(glassCount * 3);
    const vel = new Float32Array(glassCount * 3);
    for (let i = 0; i < glassCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30 + 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.1;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    return [pos, vel];
  }, [glassCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate cards in 3D floating field
    if (cardsGroupRef.current) {
      cardsGroupRef.current.children.forEach((child, idx) => {
        const c = cards[idx];
        if (c && child) {
          child.rotation.x += 0.008;
          child.rotation.y += 0.012;
          child.position.y += Math.sin(time + idx) * 0.005;
        }
      });
    }

    // Pulse Bat-Signal spotlight beam
    if (batSignalBeamRef.current) {
      batSignalBeamRef.current.rotation.y = time * 0.2;
    }

    // Animate Glass Shards
    if (glassRef.current) {
      const pos = glassRef.current.geometry.attributes.position.array;
      for (let i = 0; i < glassCount; i++) {
        pos[i * 3] += glassVelocities[i * 3];
        pos[i * 3 + 1] += glassVelocities[i * 3 + 1];
        pos[i * 3 + 2] += glassVelocities[i * 3 + 2];
        if (Math.abs(pos[i * 3]) > 30) pos[i * 3] = 0;
        if (Math.abs(pos[i * 3 + 1]) > 30) pos[i * 3 + 1] = 10;
      }
      glassRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -5, -25]}>
      {/* Joker Atmosphere Ambient Lighting */}
      <ambientLight intensity={0.25} color="#581c87" />
      <pointLight position={[-15, 10, -10]} intensity={3} color="#a855f7" distance={40} />
      <pointLight position={[15, 15, -10]} intensity={3} color="#22c55e" distance={40} />

      {/* 3D Dark Knight Poster Mesh */}
      <mesh position={[0, 10, -45]}>
        <planeGeometry args={[115, 75]} />
        <meshBasicMaterial map={darkKnightBgTexture} transparent opacity={0.85} depthWrite={false} />
      </mesh>

      {/* Monumental Bat-Signal Beam Transition */}
      <group ref={batSignalBeamRef} position={[0, -10, -20]}>
        <mesh position={[0, 20, 0]}>
          <cylinderGeometry args={[10, 2, 40, 32, 1, true]} />
          <meshBasicMaterial color="#fef08a" transparent opacity={0.18} side={THREE.DoubleSide} />
        </mesh>
        {/* Bat Emblem in Light Core */}
        <mesh position={[0, 38, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[8, 32]} />
          <meshBasicMaterial color="#fef08a" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* 3D Floating Joker Cards Field */}
      <group ref={cardsGroupRef}>
        {cards.map((c) => (
          <mesh
            key={c.id}
            position={[c.x, c.y, c.z]}
            rotation={[c.rotX, c.rotY, c.rotZ]}
            castShadow
          >
            <planeGeometry args={[2.5, 3.8]} />
            <meshStandardMaterial map={cardTexture} side={THREE.DoubleSide} roughness={0.4} />
          </mesh>
        ))}
      </group>

      {/* Exploding Glass Shards */}
      <points ref={glassRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={glassCount}
            array={glassPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.3} color="#a855f7" transparent opacity={0.7} />
      </points>
    </group>
  );
}
