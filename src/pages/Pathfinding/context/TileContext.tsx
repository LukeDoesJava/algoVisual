import React, { ReactNode } from "react";
import { TileType } from "../utils/types";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";

interface TileContextInterface {
    startTile : TileType;
    setStartTile : (startTile : TileType) => void;
    endTile : TileType;
    setEndTile : (endTile : TileType) => void;
}

export const TileContext = React.createContext<TileContextInterface | undefined>(
    undefined
);

// Might be error here
export const TileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [startTile, setStartTile] = React.useState<TileType>(START_TILE_CONFIG);
    const [endTile, setEndTile] = React.useState<TileType>(END_TILE_CONFIG);

    return (
        <TileContext.Provider
        value=
            {{ 
            startTile, 
            setStartTile, 
            endTile, 
            setEndTile 
            }}>
            {children}
            
        </TileContext.Provider>
    );
}