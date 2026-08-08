import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import GothamHeroScene from './GothamHeroScene';
import BeginsScene from './BeginsScene';
import DarkKnightScene from './DarkKnightScene';
import RisesScene from './RisesScene';
import BatmobileTumbler from './BatmobileTumbler';

export default function MainCanvas({ scrollProgress = 0, currentSection = 'home', headlightsOn = true, tumblerInteractive = false }) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 60, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#050608');
        }}
      >
        <Suspense fallback={null}>
          {/* Section 1: Gotham Hero */}
          {currentSection === 'home' && (
            <GothamHeroScene scrollProgress={scrollProgress} />
          )}

          {/* Section 2: Batman Begins */}
          {currentSection === 'begins' && (
            <BeginsScene scrollProgress={scrollProgress} />
          )}

          {/* Section 3: The Dark Knight */}
          {currentSection === 'dark-knight' && (
            <DarkKnightScene />
          )}

          {/* Section 4: The Dark Knight Rises */}
          {currentSection === 'rises' && (
            <RisesScene />
          )}

          {/* Section 5: Interactive Batmobile */}
          {currentSection === 'batmobile' && (
            <group position={[0, -0.5, 4]}>
              <BatmobileTumbler headlightsOn={headlightsOn} enableControls={tumblerInteractive} />
            </group>
          )}

          {/* Fallback ambient for general scrolling sections */}
          {(currentSection === 'timeline' || currentSection === 'stats' || currentSection === 'about' || currentSection === 'filmmaking' || currentSection === 'contact') && (
            <GothamHeroScene scrollProgress={0.5} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
