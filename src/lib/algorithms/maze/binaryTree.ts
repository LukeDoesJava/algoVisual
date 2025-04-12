import { MAX_COL, MAX_ROW } from "../../../utils/constants";
import { createWall } from "../../../utils/createWall";
import { destroyWall } from "../../../utils/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../utils/helperFunc";
import { GridType, SpeedType, TileType } from "../../../utils/types";

export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    finishTile: TileType,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
) => {
    createWall(startTile, finishTile, speed);
    await sleep(MAX_ROW * MAX_COL)

    for (const row of grid){
        for (const tile of row){
            if (tile.row%2 === 0 || tile.col % 2 === 0){
                if(!isEqual(tile, startTile) && !isEqual(tile, finishTile)){
                    tile.isWall = true;
                }
            }
        }
    }

    for (let row = 1; row < MAX_ROW; row+=2){
        for (let col = 1; col < MAX_COL; col+=2){
            if (row === MAX_ROW - 1 && col === MAX_COL - 1){
                continue;
            }
            else if(row === MAX_ROW -1){
                await destroyWall(grid, row, col, 1, speed);
            }
            else if (row === MAX_COL - 1){
                await destroyWall(grid, row, col, 0, speed);
            }
            else {
                await destroyWall(grid, row, col, getRandInt(0,2), speed);
            }
        }
    }
    setIsDisabled(false);
};