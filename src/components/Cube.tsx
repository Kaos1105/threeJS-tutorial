// Cube.tsx
import React, { useEffect } from 'react';
import * as THREE from 'three';
import {useThreeStore} from "../stores/useThreeStore.tsx";

const Cube: React.FC = () => {
    const { scene } = useThreeStore();

    useEffect(() => {
        if (!scene) return;

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        return () => {
            scene.remove(cube);
            geometry.dispose();
            material.dispose();
        };
    }, [scene]);

    return null;
};

export default Cube;
