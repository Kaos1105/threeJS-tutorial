import React, { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Instance } from "@react-three/drei";
import { Euler, Material, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { useGridStore } from "../stores/useGridStore.tsx";
import { useInteractiveStore } from "../stores/useInteractiveStore.tsx";

interface GridCellProps {
    position?: Vector3;
    rotation?: Euler;
    isSelected: boolean;
}

function GridCell({ position, rotation, isSelected }: GridCellProps) {
    const ref = useRef<MeshBasicMaterial>();

    const { selectedCells, toggleCellSelection } = useGridStore();

    const { isEditing } = useInteractiveStore();

    const [hovered, setHover] = useState(false);

    const boxGeometry = useMemo<
        [width?: number, height?: number, depth?: number]
    >(() => {
        return isEditing ? [0.9, 0.9, 0] : [1, 1, 0];
    }, [isEditing]);

    useFrame((state, delta) => {
        if (!ref.current) {
            return;
        }
        if (isEditing) {
            if (hovered) {
                ref.current.color.set("#3cc1e6");
            } else if (isSelected) {
                ref.current.color.set("#ff578f");
            } else {
                ref.current.color.set("white");
            }
        } else {
            ref.current?.color.set("#98a4b8");
        }
    });

    return (
        <>
            <boxGeometry attach="geometry" args={boxGeometry}></boxGeometry>
            <meshBasicMaterial
                attach="material"
                toneMapped={false}
                wireframe={isEditing}
            />
            <group position={position} rotation={rotation}>
                <Instance
                    color="white"
                    ref={ref}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (position && isEditing) {
                            toggleCellSelection(position);
                        }
                    }}
                    onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
                    onPointerOut={(e) => setHover(false)}
                />
            </group>
        </>
    );
}

export default GridCell;
