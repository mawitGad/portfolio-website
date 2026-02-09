'use client';

import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, useGLTF, Stage, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
    const { scene } = useGLTF('/3d/monitor.glb');
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Listen for model load completion
        const checkModelLoaded = () => {
            // Give a small delay to ensure smooth transition
            setTimeout(() => setIsLoading(false), 300);
        };

        // Model is preloaded, so set a timeout as fallback
        const timer = setTimeout(checkModelLoaded, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-[450px] lg:h-[650px] cursor-grab active:cursor-grabbing overflow-hidden relative">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background-secondary/30 rounded-lg backdrop-blur-sm">
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"
                            style={{
                                animation: 'shimmer 2s ease-in-out infinite',
                                backgroundSize: '200% 100%'
                            }} />

                        {/* Monitor outline skeleton */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-32 lg:w-56 lg:h-40 border-4 border-border-primary rounded-lg animate-pulse">
                                <div className="w-full h-3/4 bg-background-secondary" />
                                <div className="w-full h-1/4 bg-border-primary" />
                            </div>
                        </div>

                        {/* Loading text */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-secondary text-sm animate-pulse">
                            Loading 3D Model...
                        </div>
                    </div>
                </div>
            )}

            <Canvas dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[-30, 0, 5]} fov={35} />

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

            {/* Mobile Touch preventer only appears when screen < 1024 */}
            <div className="absolute inset-0 bg-transparent min-[1024px]:hidden" />
        </div>
    );
}

// Preload the model
useGLTF.preload('/3d/retro-desktop.glb');
