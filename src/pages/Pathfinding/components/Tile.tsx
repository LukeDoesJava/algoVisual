import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_COL,
  MAX_ROW,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

interface MouseFunction {
  (row: number, col: number): void;
}

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
}) {
  let tileTyleStyle;

  if (isStart) {
    tileTyleStyle = START_TILE_STYLE;
  } else if (isEnd) {
    tileTyleStyle = END_TILE_STYLE;
  } else if (isWall) {
    tileTyleStyle = WALL_TILE_STYLE;
  } else if (isPath) {
    tileTyleStyle = PATH_TILE_STYLE;
  } else if (isTraversed) {
    tileTyleStyle = TRAVERSED_TILE_STYLE;
  } else {
    tileTyleStyle = TILE_STYLE;
  }

  const outerBorderStyles = [];

  // Add outer border styles based on position
  if (row === 0) outerBorderStyles.push("border-t-black");
  if (row === MAX_ROW - 1) outerBorderStyles.push("border-b-black");
  if (col === 0) outerBorderStyles.push("border-l-black");
  if (col === MAX_COL - 1) outerBorderStyles.push("border-r-black");
  
  // This fucking updates at the most inopportune times
  // if (isWall) {
  //   outerBorderStyles.push("border-transparent");
  // } else if (isTraversed && !isPath) {
  //   outerBorderStyles.push("border-2 border-grey-100");
  // } 
  // else if(isPath) {
  //   outerBorderStyles.push("border-2");
  // }
  // else {
  //   outerBorderStyles.push("border-2 border-gray-300");
  // }
  
  const outerBorderStyle = outerBorderStyles.join(" ");
  
return (
  <div
    className={twMerge(tileTyleStyle, outerBorderStyle)}
    id={`${row}-${col}`}
    onMouseDown={() => handleMouseDown(row, col)}
    onMouseUp={() => handleMouseUp(row, col)}
    onMouseEnter={() => handleMouseEnter(row, col)}
  />
);
}