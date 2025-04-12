import { usePathfinder } from "../hooks/usePathfinder";
import { twMerge } from "tailwind-merge";
import { MAX_ROW, MAX_COL } from "../utils/constants";
import { Tile } from "./Tile";
import { RefObject } from "react";
import React from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helperFunc";

export const Grid = ({ isVisualizationRunningRef }: { isVisualizationRunningRef: RefObject<boolean> }) => {
    const { grid, setGrid } = usePathfinder();
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
                    margin: 'auto'  // Centers the background
                }}
            ></div>
            
            <div
                className="flex items-center flex-col justify-center border-sky-300 z-10"
                style={{ 
                    minHeight: `${MAX_ROW * 17}px`,
                    width: `${MAX_COL * 17}px`,
                    // Using responsive styling in style prop instead of Tailwind classes
                    // because we have dynamic values
                }}
            >
                {/* Grid */}
                {grid.map((r, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {r.map((tile, tileIndex) => {
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