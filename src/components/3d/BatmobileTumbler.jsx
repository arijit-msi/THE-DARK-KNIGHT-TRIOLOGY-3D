import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function BatmobileTumbler({ headlightsOn = true, enableControls = false }) {
  const tumblerRef = useRef();
  const jetFlameRef = useRef();
  const tumblerBgTexture = useTexture('/assets/tumbler-bg.jpg');

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Gentle hover suspension pulse if controls not active
    if (tumblerRef.current && !enableControls) {
      tumblerRef.current.position.y = Math.sin(time * 2) * 0.08;
      tumblerRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }

    // Pulse Jet Turbine Flame
    if (jetFlameRef.current) {
      jetFlameRef.current.scale.z = 1 + Math.sin(time * 20) * 0.25;
      jetFlameRef.current.scale.x = 0.9 + Math.cos(time * 15) * 0.15;
    }
  });

  return (
    <>
      {enableControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 6}
          rotateSpeed={0.8}
        />
      )}

      <group ref={tumblerRef} position={[0, -0.8, 0]}>
        <ambientLight intensity={0.3} color="#64748b" />
        <pointLight position={[5, 10, 5]} intensity={1.5} color="#d4af37" />
        <pointLight position={[-5, 8, -5]} intensity={1} color="#3b82f6" />

        {/* 3D Tumbler Poster Mesh */}
        <mesh position={[0, 8, -20]}>
          <planeGeometry args={[70, 45]} />
          <meshBasicMaterial map={tumblerBgTexture} transparent opacity={0.85} depthWrite={false} />
        </mesh>

        {/* --- MAIN CHASSIS (Angular Stealth Plates) --- */}
        <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 1.2, 5]} />
          <meshStandardMaterial color="#0c0e14" roughness={0.5} metalness={0.8} />
        </mesh>

        {/* Cockpit Roof & Angled Armor Canopy */}
        <mesh position={[0, 1.6, -0.2]} rotation={[-0.2, 0, 0]} castShadow>
          <boxGeometry args={[2.2, 0.8, 2.4]} />
          <meshStandardMaterial color="#111520" roughness={0.4} metalness={0.9} />
        </mesh>

        {/* Side Armor Flaps / Wheel Housings */}
        <mesh position={[-1.6, 1.0, 0.5]} rotation={[0, 0.1, -0.2]} castShadow>
          <boxGeometry args={[0.8, 1.0, 3.2]} />
          <meshStandardMaterial color="#090b10" roughness={0.6} metalness={0.7} />
        </mesh>
        <mesh position={[1.6, 1.0, 0.5]} rotation={[0, -0.1, 0.2]} castShadow>
          <boxGeometry args={[0.8, 1.0, 3.2]} />
          <meshStandardMaterial color="#090b10" roughness={0.6} metalness={0.7} />
        </mesh>

        {/* --- REAR DUAL MONSTER TIRES --- */}
        {[-1.8, 1.8].map((xPos, idx) => (
          <group key={idx} position={[xPos, 0.8, -1.8]} rotation={[0, 0, Math.PI / 2]}>
            <mesh castShadow>
              <cylinderGeometry args={[1.2, 1.2, 1.2, 24]} />
              <meshStandardMaterial color="#030406" roughness={0.95} />
            </mesh>
            {/* Metal Rim */}
            <mesh position={[0, 0.61, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 0.05, 12]} />
              <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        ))}

        {/* --- FRONT DUAL TIRES (Narrower) --- */}
        {[-0.9, 0.9].map((xPos, idx) => (
          <group key={idx} position={[xPos, 0.6, 2.2]} rotation={[0, 0, Math.PI / 2]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.8, 0.8, 0.8, 24]} />
              <meshStandardMaterial color="#030406" roughness={0.9} />
            </mesh>

            {/* Rim */}
            <mesh position={[0, 0.41, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 12]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} />
            </mesh>
          </group>
        ))}

        {/* --- HEADLIGHTS & SPOTLIGHT BEAMS --- */}
        {[-0.8, 0.8].map((xPos, idx) => (
          <group key={idx} position={[xPos, 1.1, 2.5]}>
            {/* LED Bulb */}
            <mesh>
              <boxGeometry args={[0.4, 0.25, 0.2]} />
              <meshBasicMaterial color={headlightsOn ? '#fef08a' : '#334155'} />
            </mesh>
            {headlightsOn && (
              <>
                <spotLight
                  position={[0, 0, 0.1]}
                  target-position={[0, -2, 15]}
                  angle={0.6}
                  penumbra={0.5}
                  intensity={4}
                  color="#fef08a"
                  distance={25}
                />
                {/* Volumetric light cone graphic */}
                <mesh position={[0, -0.2, 3]} rotation={[Math.PI / 2, 0, 0]}>
                  <coneGeometry args={[1.5, 6, 16, 1, true]} />
                  <meshBasicMaterial color="#fef08a" transparent opacity={0.25} side={THREE.DoubleSide} />
                </mesh>
              </>
            )}
          </group>
        ))}

        {/* --- JET TURBINE EXHAUST --- */}
        <group position={[0, 1.0, -2.6]}>
          {/* Exhaust Cylinder */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.6, 1.0, 16]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.3} />
          </mesh>

          {/* Jet Flame Cone */}
          <mesh ref={jetFlameRef} position={[0, 0, -1.2]} rotation={[-Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.45, 1.8, 16]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
          </mesh>
        </group>
      </group>
    </>
  );
}
