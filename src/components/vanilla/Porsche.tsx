// Cube.tsx
import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useThreeStore } from "../../stores/useThreeStore.tsx";

const Porsche: React.FC = () => {
    const { scene, renderer, camera } = useThreeStore();
    const modelRef = useRef<THREE.Group | null>(null);

    const animate = useCallback(() => {
        if (modelRef.current) {
            // Move the model along the x-axis
            modelRef.current.position.z += 0.01;
            if (modelRef.current.position.z > 10) {
                modelRef.current.position.z = 0; // Reset position to create a loop
            }
        }

        if (renderer && camera && scene) {
            renderer.render(scene, camera);
        }

        return requestAnimationFrame(animate);
    }, [scene, renderer, camera]);

    useEffect(() => {
        if (!scene) return;

        //Porsche generating
        const loader = new GLTFLoader();
        loader.load(
            "/models/porsche_911.glb",
            function (gltf) {
                modelRef.current = gltf.scene;
                scene.add(modelRef.current);
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

        const animationId = animate();

        return () => {
            cancelAnimationFrame(animationId);

            modelRef.current && scene.remove(modelRef.current);
        };
    }, [scene, renderer, camera]);

    return null;
};

export default Porsche;
