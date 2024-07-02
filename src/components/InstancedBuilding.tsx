import { Instances } from "@react-three/drei";
import { MAX_RANGE } from "../pages/FiberScene.tsx";

// Generate data array with positions and rotation (default rotation)
type IProp = {
    range: number;
};

function InstancedBuilding({ range }: IProp) {
    return (
        <>
            <Instances
                limit={MAX_RANGE * MAX_RANGE}
                range={range * range}
            ></Instances>
        </>
    );
}

export default InstancedBuilding;
