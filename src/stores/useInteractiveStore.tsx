import { create } from "zustand";
import { Vector3 } from "three";

type InteractiveState = {
    isEditing: boolean;
    setIsEditing: (isEdit: boolean) => void;
};

export const useInteractiveStore = create<InteractiveState>((set) => ({
    isEditing: true,
    setIsEditing: (isEdit) => set({ isEditing: isEdit })
}));
