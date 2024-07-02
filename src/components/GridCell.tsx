import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Instance } from "@react-three/drei";
import { Euler, Mesh, MeshBasicMaterial, Vector3 } from "three";

interface GridCellProps {
    position?: Vector3;
    rotation?: Euler;
    isSelected: boolean;
    onClick: () => void;
}

function GridCell({ position, rotation, isSelected, onClick }: GridCellProps) {
    const ref = useRef<MeshBasicMaterial>();

    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (!ref.current) {
            return;
        }
        if (hovered) {
            ref.current.color.set("#3cc1e6");
        } else if (isSelected) {
            ref.current.color.set("#ff578f");
        } else {
            ref.current.color.set("white");
        }
    });

    return (
        <group position={position} rotation={rotation}>
            <Instance
                color="white"
                ref={ref}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
                onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
                onPointerOut={(e) => setHover(false)}
            />
        </group>
    );
}

export default GridCell;
