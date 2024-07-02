import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance } from "@react-three/drei";
import { Euler, Mesh, MeshBasicMaterial, Vector3 } from "three";

function GridCell(props: { position?: Vector3; rotation?: Euler }) {
    const ref = useRef<MeshBasicMaterial>();
    const [hovered, setHover] = useState(false);
    useFrame((state, delta) => {
        if (!ref.current) {
            return;
        }
        if (hovered) {
            ref.current.color.set("#fe4365");
        } else {
            ref.current.color.set("white");
        }
    });
    return (
        <group {...props}>
            <Instance
                color="white"
                ref={ref}
                onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
                onPointerOut={(e) => setHover(false)}
            />
        </group>
    );
}

export default GridCell;
