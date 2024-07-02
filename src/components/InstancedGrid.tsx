import { useCallback, useMemo, useState } from "react";
import { Instances } from "@react-three/drei";
import GridCell from "./GridCell.tsx";
import { Euler, Vector3 } from "three";
import InstancedBuilding from "./InstancedBuilding.tsx";
import CarModel from "./CarModel.tsx";
import { MAX_RANGE } from "../pages/FiberScene.tsx";
import { useGridStore } from "../stores/useGridStore.tsx";
import { BuildingGLB } from "../../public/models/Building.tsx";

// Generate data array with positions and rotation (default rotation)
type IProp = {
    range: number;
};

function InstanceGrid({ range }: IProp) {
    const { selectedCells, toggleCellSelection } = useGridStore();

    const data = useMemo(() => {
        const defaultEuler = new Euler(-Math.PI / 2, 0, 0);
        const result: { position: Vector3; rotation: Euler }[] = [];
        for (let x = 0; x < range; x++)
            for (let z = 0; z < range; z++) {
                result.push({
                    position: new Vector3(x, 0, z),
                    rotation: defaultEuler
                });
            }
        return result;
    }, [range]);

    return (
        <>
            <Instances limit={MAX_RANGE * MAX_RANGE} range={range * range}>
                {data.map((props, i) => (
                    <GridCell
                        key={i}
                        {...props}
                        isSelected={selectedCells.some((cell) =>
                            cell.equals(props.position)
                        )}
                    />
                ))}
            </Instances>
        </>
    );
}

export default InstanceGrid;
