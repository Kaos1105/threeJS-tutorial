// Cube.tsx
import React, { useEffect } from 'react';
import * as THREE from "three";
import {useThreeStore} from "../stores/useThreeStore.tsx";

const GridHelper: React.FC = () => {
    const { scene } = useThreeStore();

    useEffect(() => {
        if(!scene) return;

        const size = 100;
        const divisions = 100;

        //grid helper
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );

        return ()=>{
            scene.remove(gridHelper);
        }
    }, [scene]);

    return null;
};

export default GridHelper;
