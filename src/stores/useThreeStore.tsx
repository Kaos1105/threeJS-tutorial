import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

import { create } from 'zustand'

interface ThreeState {
    scene: THREE.Scene | null;
    camera: THREE.Camera | null;
    renderer: THREE.Renderer | null;
    controls: OrbitControls|null;
    setScene: (scene: THREE.Scene) => void
    setCamera: (camera: THREE.Camera) => void
    setRenderer: (renderer: THREE.Renderer) => void
    setControls: (controls:OrbitControls) => void
}

export const useThreeStore = create<ThreeState>((set) => ({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    setScene: (scene) => set({ scene }),
    setCamera: (camera) => set({ camera }),
    setRenderer: (renderer) => set({ renderer }),
    setControls: (controls) => set({ controls }),
}))
