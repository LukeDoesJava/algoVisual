import { UsePathfinder } from "../hooks/UsePathfinder";
import { MAX_ROW, MAX_COL } from "../utils/constants";
import { Tile } from "./Tile";
import { RefObject } from "react";
import React from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helperFunc";
import { TileType } from "../utils/types";

export const Grid = ({ isVisualizationRunningRef }: { isVisualizationRunningRef: RefObject<boolean> }) => {
    const { grid, setGrid } = UsePathfinder();
    const [isMouseDown, setIsMouseDown] = React.useState<boolean>(false);

    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) return;

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) return;
        setIsMouseDown(false);
    };

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) return;
        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    };

    return (
        <div className="relative flex items-center justify-center mt-10">
            {/* Background grid */}
            <div 
            className="absolute bg-white pointer-events-none" 
            style={{ 
                inset: '0', 
                width: `${MAX_COL * 17}px`, 
                height: `${MAX_ROW * 17}px`,
                margin: 'auto',  // Centers the background
                zIndex: 0        // Ensures it stays behind other elements
            }}
            ></div>
            
            <div
            className="flex items-center flex-col justify-center border-sky-300 z-10"
            style={{ 
                minHeight: `${MAX_ROW * 17}px`,
                width: `${MAX_COL * 17}px`,
            }}
            >
                {/* Grid */}
                {grid.map((r: TileType[], rowIndex: number) => (
                    <div key={rowIndex} className="flex">
                        {r.map((tile: TileType, tileIndex: number) => {
                            const { row, col, isFinish, isStart, isPath, isTraversed, isWall } = tile;
                            return (
                                <Tile
                                    key={tileIndex}
                                    row={tile.row}
                                    col={tile.col}
                                    isStart={isStart}
                                    isEnd={isFinish}
                                    isTraversed={isTraversed}
                                    isWall={isWall}
                                    isPath={isPath}
                                    handleMouseDown={() => handleMouseDown(row, col)}
                                    handleMouseUp={() => handleMouseUp(row, col)}
                                    handleMouseEnter={() => handleMouseEnter(row, col)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}