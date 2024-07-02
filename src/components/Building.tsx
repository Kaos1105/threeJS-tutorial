// Cube.tsx
import React, { useRef } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
type IProps = {
    position: Vector3;
};

const Building = ({ position }: IProps) => {
    const { scene } = useGLTF("/models/building.glb");
    const modelRef = useRef<THREE.Group | null>(null);

    console.log(scene);
    return (
        <primitive
            ref={modelRef}
            scale={[0.35, 0.5, 0.35]}
            object={scene.clone()}
            position={
                new Vector3(
                    position.x + 0.22,
                    position.y + 0.1,
                    position.z + 0.4
                )
            }
        />
    );
};

export default Building;
