import { createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helperFunc";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";
import React from "react";

interface PathfinderContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

// Create a default value
const defaultContextValue: PathfinderContextInterface = {
    algorithm: 'BFS',
    setAlgorithm: () => {},
    maze: 'NONE',
    setMaze: () => {},
    grid: createGrid(START_TILE_CONFIG, END_TILE_CONFIG),
    setGrid: () => {},
    isGraphVisualized: false,
    setIsGraphVisualized: () => {}
};

// Create the context with a default value
export const PathfinderContext = createContext<PathfinderContextInterface>(defaultContextValue);

// Separate provider component - using named function declaration
export const PathfinderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>('BFS');
    const [maze, setMaze] = useState<MazeType>('NONE');
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIG, END_TILE_CONFIG));
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

    return (
        <PathfinderContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized
            }}
        >
            {children}
        </PathfinderContext.Provider>
    );
};