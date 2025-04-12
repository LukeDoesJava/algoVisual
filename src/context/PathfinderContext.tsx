import { createContext } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helperFunc";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";
import React from "react";

interface PathfinderContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze : MazeType;
    setMaze: (maze: MazeType) => void;
    grid : GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathfinderContext = createContext<PathfinderContextInterface | undefined>(undefined);

export const PathfinderProvider = ({children} : {children: React.ReactNode}) => {
    const [algorithm, setAlgorithm] = React.useState<AlgorithmType>('BFS');
    const [maze, setMaze] = React.useState<MazeType>('NONE');
    const [grid, setGrid] = React.useState<GridType>(createGrid(START_TILE_CONFIG, END_TILE_CONFIG));
    const [isGraphVisualized, setIsGraphVisualized] = React.useState<boolean>(false);

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
}