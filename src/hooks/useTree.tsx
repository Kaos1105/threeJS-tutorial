import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {createContext, ReactNode, useContext} from "react";

// interface ThreeContextProps {
//     scene: THREE.Scene | null;
//     camera: THREE.Camera | null;
//     renderer: THREE.Renderer | null;
//     controls: OrbitControls|null;
// }
//
// export const ThreeContext = createContext<ThreeContextProps>({
//     scene: null,
//     camera: null,
//     renderer: null,
//     controls: null,
// });
//
// export const useThree = () => useContext(ThreeContext);