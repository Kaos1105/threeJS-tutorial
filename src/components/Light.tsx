import React, { useEffect } from 'react';
import * as THREE from 'three';
import {useThreeStore} from "../stores/useThreeStore.tsx";

const Light: React.FC = () => {
    const { scene } = useThreeStore();

    useEffect(() => {
        if (!scene) return;

        const ambientLight = new THREE.AmbientLight('white', 2);

        const mainLight = new THREE.DirectionalLight('white', 5);
        mainLight.position.set(10, 10, 10);

        scene.add(ambientLight, mainLight);

        return () => {
            scene.remove(ambientLight, mainLight);
        };
    }, [scene]);

    return null;
};

export default Light;