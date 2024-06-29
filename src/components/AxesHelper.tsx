// Cube.tsx
import React, { useEffect } from 'react';
import * as THREE from "three";
import {useThreeStore} from "../stores/useThreeStore.tsx";

const AxesHelper: React.FC = () => {
    const { scene } = useThreeStore();

    useEffect(() => {
        if(!scene) return;

        //Porsche generating
        //Axes helper
        const axesHelper = new THREE.AxesHelper(1000);
        scene.add(axesHelper);

    }, [scene]);

    return null;
};

export default AxesHelper;
