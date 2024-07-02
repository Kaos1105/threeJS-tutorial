// Cube.tsx
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
// eslint-disable-next-line

const CarModel: React.FC = () => {
    const gltf = useLoader(GLTFLoader, "/models/porsche_911.glb");
    const modelRef = useRef<THREE.Group | null>(null);

    useFrame(({ clock }) => {
        if (modelRef.current) {
            // Move the model along the x-axis
            modelRef.current.position.z += 0.01;
            if (modelRef.current.position.z > 10) {
                modelRef.current.position.z = 0; // Reset position to create a loop
            }
        }
    });

    return (
        <primitive ref={modelRef} scale={[0.5, 0.5, 0.5]} object={gltf.scene} />
    );
};

export default CarModel;
