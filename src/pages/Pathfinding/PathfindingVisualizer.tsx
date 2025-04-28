import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { Nav } from "./components/Nav";
import { ControlPanel } from "./components/ControlPanel";
import { EditTileProvider } from "./hooks/UseEditTile";

function PathfindingVisualizer() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfinderProvider>
      <TileProvider>
        <SpeedProvider>
          <EditTileProvider>
            <div className="h-screen w-screen flex flex-col bg-secondary">
              <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
              <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
              <ControlPanel />
            </div>
          </EditTileProvider>
        </SpeedProvider>
      </TileProvider>
    </PathfinderProvider>
  );
}

export default PathfindingVisualizer;