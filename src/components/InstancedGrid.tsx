import { useCallback, useMemo, useState } from "react";
import { Instances } from "@react-three/drei";
import GridCell from "./GridCell.tsx";
import { Euler, Vector3 } from "three";
import Building from "./Building.tsx";
import CarModel from "./CarModel.tsx";

// Generate data array with positions and rotation (default rotation)
type IProp = {
    range: number;
};
function InstanceGrid({ range }: IProp) {
    const [selectedCells, setSelectedCells] = useState<Vector3[] | []>([]);

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

    const toggleCellSelection = useCallback(
        (position: Vector3) => {
            setSelectedCells((prevSelectedCells) => {
                const index = prevSelectedCells.findIndex((cell) =>
                    cell.equals(position)
                );
                if (index === -1) {
                    // Add cell to selected
                    return [...prevSelectedCells, position];
                } else {
                    // Remove cell from selected
                    return prevSelectedCells.filter((_, i) => i !== index);
                }
            });
        },
        [setSelectedCells]
    );

    return (
        <>
            <Instances limit={10000} range={range * range}>
                <boxGeometry
                    attach="geometry"
                    args={[0.9, 0.9, 0]}
                ></boxGeometry>
                <meshBasicMaterial
                    attach="material"
                    toneMapped={false}
                    wireframe
                />
                {data.map((props, i) => (
                    <GridCell
                        key={i}
                        {...props}
                        isSelected={selectedCells.some((cell) =>
                            cell.equals(props.position)
                        )}
                        onClick={() => toggleCellSelection(props.position)}
                    />
                ))}
            </Instances>
            {selectedCells.map((position) => {
                return (
                    <Building
                        position={new Vector3(position.x, 0, position.z)}
                    />
                );
            })}
        </>
    );
}

export default InstanceGrid;
