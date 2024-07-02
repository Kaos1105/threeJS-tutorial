import { PerspectiveCameraProps, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { PerspectiveCamera, useCamera, useHelper } from "@react-three/drei";
import { Vector3 } from "three";

const FiberScene = () => {
    const { camera, scene, gl: renderer } = useThree();

    const config: PerspectiveCameraProps = {
        fov: 75,
        position: [5, 5, 5],
        onUpdate: (x) => x.updateProjectionMatrix()
    };

    useEffect(() => {
        console.log(camera);
        //scene setup
        scene.background = new THREE.Color(0xbfe3dd);
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(
            new RoomEnvironment(renderer),
            0.04
        ).texture;
    }, []);

    return (
        <>
            <PerspectiveCamera makeDefault {...config}></PerspectiveCamera>
        </>
    );
};

export default FiberScene;
