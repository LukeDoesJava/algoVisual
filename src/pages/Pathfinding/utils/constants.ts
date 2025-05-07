import { MazeSelectType, SpeedSelectType } from "./types";
import { twMerge } from "tailwind-merge";

export const MAX_ROW = 39;
export const MAX_COL = 49;

export const START_TILE_CONFIG = {
    row : 1,
    col : 1,
    isStart : false,
    isFinish : false,
    isWall : false,
    isPath : false,
    isTraversed : false,
    distance : 0,
    parent : null
};


export const END_TILE_CONFIG = {
    row : MAX_ROW - 2,
    col : MAX_COL - 2,
    isStart : false,
    isFinish : false,
    isWall : false,
    isPath : false,
    isTraversed : false,
    distance : 0,
    parent : null
};

export const TILE_STYLE = "lg:w-[17px] md:w-[15px] sm:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] sm:h-[8px] h-[7px] border-2 border-gray-300";

export const TRAVERSED_TILE_STYLE = twMerge(TILE_STYLE, "bg-cyan-700 border-cyan-900");
export const START_TILE_STYLE = twMerge(TILE_STYLE, "bg-green-400");
export const END_TILE_STYLE = twMerge(TILE_STYLE, "bg-red-400");
export const WALL_TILE_STYLE = twMerge(TILE_STYLE, "bg-black border-black");
export const PATH_TILE_STYLE = twMerge(TILE_STYLE, "bg-green-700 border-green-900");

export const MAZES: MazeSelectType[] = [
    {name: "No Maze", value: "NONE"},
    {name: "Binary Tree", value: "BINARY_TREE"},
    {name: "Recursive Division", value: "RECURSIVE_DIVISION"},
    {name: "Zig Zag", value: "ZIG_ZAG"},
    {name: "Walls", value: "WALLS"},
];

export const SPEEDS : SpeedSelectType[] = [
    {name: "Fast", value: 0.5},
    {name: "Average", value: 1},
    {name: "Slow", value: 2},
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;

export const PATHFINDING_ALGORITHMS = [
    {name: "Dijkstra", value: "DIJKSTRA"},
    {name: "A*", value: "A_STAR"},
    {name: "Breadth First", value: "BREADTH_FIRST"},
    {name: "Depth First", value: "DEPTH_FIRST"},
    {name: "Analyze", value: "ANALYZE"},
]