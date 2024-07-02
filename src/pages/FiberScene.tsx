import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Scene from "../modules/Scene.tsx";
import InstancedGrid from "../components/InstancedGrid.tsx";
import { useControls } from "leva";
import InstancedBuilding from "../components/InstancedBuilding.tsx";
import { Vector3 } from "three";
import { useEffect } from "react";
import { useInteractiveStore } from "../stores/useInteractiveStore.tsx";

export const MAX_RANGE = 40;
const FiberScene = () => {
    const { setIsEditing } = useInteractiveStore();

    const { range, isEditing } = useControls({
        range: { value: 5, min: 5, max: MAX_RANGE, step: 1 },
        isEditing: true
    });

    useEffect(() => {
        setIsEditing(isEditing);
    }, [isEditing]);

    return (
        <>
            <Canvas style={{ width: "100vw", height: "100vh" }}>
                <Scene />
                <InstancedGrid range={range} />
                <InstancedBuilding />
                <OrbitControls />
                <axesHelper args={[1000]} />
                <Stats />
            </Canvas>
        </>
    );
};

export default FiberScene;
