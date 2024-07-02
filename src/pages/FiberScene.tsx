import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Scene from "../modules/Scene.tsx";
import InstancedGrid from "../components/InstancedGrid.tsx";
import { useControls } from "leva";
import Building from "../components/Building.tsx";
import { Vector3 } from "three";

const FiberScene = () => {
    const { range, isEditing } = useControls({
        range: { value: 5, min: 5, max: 40, step: 1 },
        isEditing: true
    });

    return (
        <>
            <Canvas style={{ width: "100vw", height: "100vh" }}>
                <Scene />
                {/*<CarModel />*/}
                {/*<Grid*/}
                {/*    position={[0, 0, 0]}*/}
                {/*    args={gridSize}*/}
                {/*    {...gridConfig}*/}
                {/*/>*/}
                <InstancedGrid range={range} />
                <OrbitControls />
                <axesHelper args={[1000]} />
                <Stats />
            </Canvas>
        </>
    );
};

export default FiberScene;
