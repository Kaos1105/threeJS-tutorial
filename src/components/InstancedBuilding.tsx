// Cube.tsx
import React from "react";
import { Vector3 } from "three";
import { BuildingGLB } from "../../public/models/Building.tsx";
import { useGridStore } from "../stores/useGridStore.tsx";

const InstancedBuilding = () => {
    const { selectedCells, toggleCellSelection } = useGridStore();

    return (
        <>
            {selectedCells.map((position, index) => {
                return (
                    <BuildingGLB
                        key={index}
                        scale={[0.35, 0.5, 0.35]}
                        position={
                            new Vector3(
                                position.x + 0.22,
                                0.2,
                                position.z + 0.4
                            )
                        }
                    />
                );
            })}
        </>
    );
};

export default InstancedBuilding;
