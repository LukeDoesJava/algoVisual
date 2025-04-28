import { MAX_COL, MAX_ROW, SLEEP_TIME, WALL_TILE_STYLE } from "./constants";
import { isEqual, sleep } from "./helperFunc";
import { GridType, TileType } from "./types";

export async function constructBorder(
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
) {
    const shape = [
        { col: 0, row: 1 },
        { col: 1, row: 0 },
        { col: 0, row: -1 },
        { col: -1, row: 0 },
    ]

    let row = 0;
    let col = 0;

    for (let i = 0; i < 4; i++){
        const direction = shape[i];

        while(
            row + direction.row >= 0 &&
            row + direction.row < MAX_ROW &&
            col + direction.col >= 0 &&
            col + direction.col < MAX_COL
        ){
            row += direction.row;
            col += direction.col;

            if(!isEqual(grid[row][col], startTile) && !isEqual(grid[row][col], endTile)){
                grid[row][col].isWall = true;
                const tileElement = document.getElementById(`${row}-${col}`);
                if (tileElement) {
                    tileElement.className = `${WALL_TILE_STYLE} animate-wall`; 
                }
                await sleep(SLEEP_TIME);
            }
        }
        if(row < 0) row = 0;
        if(row >= MAX_ROW) row = MAX_ROW - 1;
        if(col < 0) col = 0;
        if(col >= MAX_COL) col = MAX_COL - 1;
    }
}