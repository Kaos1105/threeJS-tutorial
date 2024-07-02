import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Scene from "../modules/Scene.tsx";
import InstancedGrid from "../components/InstancedGrid.tsx";
import { useControls } from "leva";

const FiberScene = () => {
    // const { gridSize, ...gridConfig } = useControls({
    //     gridSize: [20, 20],
    //     cellSize: { value: 0.5, min: 0, max: 10, step: 0.1 },
    //     cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    //     cellColor: "#6f6f6f",
    //     sectionSize: { value: 1, min: 0, max: 10, step: 0.1 },
    //     sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    //     sectionColor: "#9d4b4b",
    //     fadeDistance: { value: 60, min: 0, max: 100, step: 1 },
    //     fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    //     followCamera: false,
    //     infiniteGrid: true
    // });

    const { range } = useControls({
        range: { value: 5, min: 5, max: 40, step: 1 }
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
