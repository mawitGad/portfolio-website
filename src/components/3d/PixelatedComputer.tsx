'use client';

import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, useGLTF, Stage, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
    const { scene } = useGLTF('/3d/retro-desktop.glb');
    const groupRef = useRef<THREE.Group>(null);

    // Mouse parallax effect (only when not interacting via controls)
    useFrame((state) => {
        if (!groupRef.current) return;

        const targetRotateX = (state.mouse.y * 0.05);
        const targetRotateY = (state.mouse.x * 0.05);

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotateX, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotateY, 0.05);
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
                <Center top>
                    {/* Corrected orientation: Facing the camera directly */}
                    <primitive
                        object={scene}
                        scale={2.2}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                </Center>
            </Float>
        </group>
    );
};

const CustomControls = () => {
    const controlsRef = useRef<any>(null);
    const { gl } = useThree();

    useEffect(() => {
        const canvas = gl.domElement;

        // Prevent wheel events from zooming, but allow them to bubble for page scroll
        const handleWheel = (e: WheelEvent) => {
            // Pinch-to-zoom on trackpads often has ctrlKey: true
            // If it's a regular scroll (non-pinch), we stop propagation to OrbitControls
            if (!e.ctrlKey) {
                e.stopImmediatePropagation();
            }
        };

        // Add listener as capture to intercept before OrbitControls
        canvas.addEventListener('wheel', handleWheel, { capture: true });

        return () => {
            canvas.removeEventListener('wheel', handleWheel, { capture: true });
        };
    }, [gl]);

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            makeDefault
        />
    );
};

export default function PixelatedComputer() {
    return (
        <div className="w-full h-[450px] lg:h-[650px] cursor-grab active:cursor-grabbing  overflow-hidden">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[3, 3, 5]} fov={35} />

                    <Stage
                        intensity={0.4}
                        environment="city"
                        shadows={false}
                        adjustCamera={false}
                    >
                        <Model />
                    </Stage>

                    <CustomControls />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload the model
useGLTF.preload('/3d/retro-desktop.glb');
