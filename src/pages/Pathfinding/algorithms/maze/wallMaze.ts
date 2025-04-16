import { MAX_COL, MAX_ROW, SPEEDS, TILE_STYLE, WALL_TILE_STYLE } from "../../utils/constants";
import { GridType, SpeedType } from "../../utils/types";
import { sleep } from "../../utils/helperFunc";

export async function wallMaze(
    grid: GridType,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
) {
    for (let row = 0; row < MAX_ROW; row++) {
        // Check that we are not within 3 tiles of the start or end tile
        if (row > 1 && row < MAX_ROW - 1) {
            // Set every other row to a wall
            if (row % 2 === 0) {
                for (let col = 0; col < MAX_COL; col++) {
                    // set each tile to a wall
                    grid[row][col].isWall = true;
                    const tileElement = document.getElementById(`${row}-${col}`);
                    if (tileElement) {
                        tileElement.classList.add(...WALL_TILE_STYLE.split(" "), "animate-wall");
                    }
                    // wait for the animation to finish
                    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
                }
                // Now pick a random tile in the row to be a passage
                const passageCol = Math.floor(Math.random() * (MAX_COL-2) + 1);
                grid[row][passageCol].isWall = false;
                document.getElementById(`${row}-${passageCol}`)!.className = TILE_STYLE;
                await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
            }
        }
    }
    setIsDisabled(false);
};