export type AlgorithmType = "BFS" | "DFS" | "DIJKSTRA" | "A_STAR";
export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION';
export interface MazeSelectType{
    name: string;
    value: MazeType;
}
export type TileType = {
    distance: number;
    row : number;
    col : number;
    isStart : boolean;
    isFinish : boolean;
    isWall : boolean;
    isTraversed : boolean;
    isPath : boolean;
    parent : TileType | null;
};
export type GridType = TileType [][];

export type SpeedType = 2 | 1 | 0.5; 

export interface SpeedSelectType{
    name: string;
    value: SpeedType;
}
export interface AlgorithmSelectType{
    name: string;
    value: AlgorithmType;
}