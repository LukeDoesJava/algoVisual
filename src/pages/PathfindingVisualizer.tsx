import { useRef } from "react";
import { Grid } from "../components/Grid";
import { PathfinderProvider } from "../context/PathfinderContext";
import { SpeedProvider } from "../context/speedContext";
import { TileProvider } from "../context/TileContext";
import { Nav } from "../components/Nav";

function PathfindingVisualizer() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col bg-primary">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfinderProvider>
  );
}

export default PathfindingVisualizer;