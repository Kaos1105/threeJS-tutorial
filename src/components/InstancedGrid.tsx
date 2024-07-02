import { useEffect, useMemo, useRef } from "react";
import { Instances } from "@react-three/drei";
import GridCell from "./GridCell.tsx";
import { Euler, InstancedMesh, MeshBasicMaterial, Vector3 } from "three";

// Generate data array with positions and rotation (default rotation)
type IProp = {
    range: number;
};
function InstanceGrid({ range }: IProp) {
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
        <Instances limit={10000} range={range * range}>
            <boxGeometry attach="geometry" args={[0.9, 0.9, 0]}></boxGeometry>
            <meshBasicMaterial attach="material" toneMapped={false} wireframe />
            {data.map((props, i) => (
                <GridCell key={i} {...props} />
            ))}
        </Instances>
    );
}

export default InstanceGrid;
