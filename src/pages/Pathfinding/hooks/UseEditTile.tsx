import React, { createContext, useContext, useState } from "react";

type EditTileContextType = {
  isDrawing: boolean;
  toggleDrawing: (state: boolean) => void;
};

const EditTileContext = createContext<EditTileContextType | undefined>(undefined);

export const EditTileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(true);

  const toggleDrawing = (state: boolean) => {
    setIsDrawing(state);
  };

  return (
    <EditTileContext.Provider value={{ isDrawing, toggleDrawing }}>
      {children}
    </EditTileContext.Provider>
  );
};

export const useEditTile = () => {
  const context = useContext(EditTileContext);
  if (!context) {
    throw new Error("useEditTile must be used within an EditTileProvider");
  }
  return context;
};