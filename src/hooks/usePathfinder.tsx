import { useContext } from "react";
import { PathfinderContext } from "../context/PathfinderContext";

export const usePathfinder = () => {
    const context = useContext(PathfinderContext);

    if (!context) {
        throw new Error('usePathfinder must be used within a PathfinderProvider');
    }

    return context;
}