import { create } from "zustand";
import { Vector3 } from "three";

type GridStoreState = {
    selectedCells: Vector3[];
    toggleCellSelection: (position: Vector3) => void;
};

export const useGridStore = create<GridStoreState>((set) => ({
    selectedCells: [],
    toggleCellSelection: (position: Vector3) =>
        set((state) => {
            const index = state.selectedCells.findIndex((cell) =>
                cell.equals(position)
            );
            if (index === -1) {
                return { selectedCells: [...state.selectedCells, position] };
            } else {
                return {
                    selectedCells: state.selectedCells.filter(
                        (_, i) => i !== index
                    )
                };
            }
        })
}));
