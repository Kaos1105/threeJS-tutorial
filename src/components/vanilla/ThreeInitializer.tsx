// ThreeContext.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { useThreeStore } from "../../stores/useThreeStore.tsx";
import { ACESFilmicToneMapping } from "three";

export const ThreeInitializer: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const { setScene, setRenderer, setCamera, setControls } = useThreeStore();

    useEffect(() => {
        //camera setup
        const camera = new THREE.PerspectiveCamera(
            40,
            window.innerWidth / window.innerHeight,
            1,
            100
        );
        camera.position.set(5, 5, 5);

        //renderer setup
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.toneMapping = ACESFilmicToneMapping;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(
            Math.min(Math.max(1, window.devicePixelRatio), 2)
        );
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        //scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xbfe3dd);
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(
            new RoomEnvironment(renderer),
            0.04
        ).texture;

        // Control Setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.target.set(0, 0.5, 0);
        controls.enablePan = true;
        controls.enableDamping = true;

        //Stats
        const stats = new Stats();
        mountRef.current?.appendChild(stats.dom);

        setScene(scene);
        setCamera(camera);
        setRenderer(renderer);
        setControls(controls);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            stats.update();
            controls.update();
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [setScene, setCamera, setRenderer, setControls]);

    return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};
