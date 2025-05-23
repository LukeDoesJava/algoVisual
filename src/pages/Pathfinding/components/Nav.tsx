import { MutableRefObject, useState } from "react";
import { UsePathfinder } from "../hooks/UsePathfinder";
import { UseTile } from "../hooks/UseTile";
import { 
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
 } from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { UseSpeed } from "../hooks/UseSpeed";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { animatePath } from "../utils/animatePath";

// Import shadcn components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { InfoIcon, PlayIcon, SoupIcon } from "lucide-react";


export function Nav({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showAnalyzeDialog, setShowAnalyzeDialog] = useState(false);
  const {
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = UsePathfinder();
  const { startTile, endTile } = UseTile();
  const { speed, setSpeed } = UseSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, finishTile: endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });
    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  const handlerRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      resetGrid({ grid: grid.slice(), startTile, finishTile: endTile });
      return;
    }

    const { traversedTiles, path } = runPathfindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    animatePath(traversedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isVisualizationRunningRef.current = true;
    setTimeout(() => {
      const newGrid = grid.slice();
      setGrid(newGrid);
      setIsGraphVisualized(true);
      setIsDisabled(false);
      isVisualizationRunningRef.current = false;
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
  };
  return (
    <div className="flex bg-primary items-center justify-center min-h-[4.5rem] border-b-8 border-white shadow-gray-600 sm:px-10 px-5 py-6">
      <Dialog open={showAnalyzeDialog} onOpenChange={setShowAnalyzeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Algorithm Analysis</DialogTitle>
            <DialogDescription className="py-4">
              The Analysis tool compares the performance of different pathfinding algorithms on your current grid configuration. It will:
              <ul className="list-disc pl-6 pt-2 space-y-1">
                <li>Run each algorithm on the same grid</li>
                <li>Compare execution times</li>
                <li>Show path lengths and nodes explored</li>
                <li>Visualize the differences in approach</li>
              </ul>
              <br />
              <b>Note:</b> This may take a while to complete. Furthermore, not every algorithm guarantees shortest path.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="bg-green-500 hover:bg-lime-900" onClick={() => setShowAnalyzeDialog(false)}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem] gap-8 px-4 py-2">
        <h1 className="lg:flex hidden w-[40%] text-2xl font-bold pl-2">
          PATHFINDING//VISUAL
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="flex text-text font-bold pl-1">Maze Generation</h1>
          <Select onValueChange={(value) => handleGenerateMaze(value as MazeType)}
                  defaultValue={MAZES.find((maze) => maze.name === "No Maze")?.value}>
            <SelectTrigger className="bg-primary border-white w-[200px]">
              <SelectValue placeholder="Select ..." />
            </SelectTrigger>
            <SelectContent>
              {MAZES.map((maze) => (
                <SelectItem
                  key={maze.value}
                  value={maze.value}
                  disabled={isDisabled}
                >
                  {maze.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="flex text-text font-bold pl-1">Pathfinder Algorithm</h1>
          <Select onValueChange={(algo) => {
            if (algo === "ANALYZE") {
              setShowAnalyzeDialog(true);
              return;
            }
            setAlgorithm(algo as AlgorithmType);
          }}
                  defaultValue={PATHFINDING_ALGORITHMS.find((algo) => algo.name === "Dijkstra")?.value.toString()}>
            <SelectTrigger className="bg-primary border-white w-[200px]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {PATHFINDING_ALGORITHMS.map((algo) => (
                <SelectItem key={algo.value} value={algo.value}>
                  <div className={"flex items-center"}>
                    {algo.name === "Analyze" && <InfoIcon className="mr-2"/>}
                    {algo.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="flex text-text font-bold pl-1">Speed</h1>
          <Select onValueChange={(value) => setSpeed(Number(value) as SpeedType)}
              defaultValue={SPEEDS.find((speed) => speed.name === "Fast")?.value.toString()}>
            <SelectTrigger className="bg-primary border-white w-[200px]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {SPEEDS.map((speed) => (
                <SelectItem key={speed.value} value={speed.value.toString()}>
                  {speed.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className={`w-[200px] h-[45px] ml-4 ${
            isGraphVisualized ? "bg-red-500 hover:bg-red-900" : "bg-green-500 hover:bg-lime-900"
          }`}
          disabled={isDisabled}
          onClick={handlerRunVisualizer}
        >
          {isGraphVisualized ? (
            <>
              <SoupIcon className="mr-2" />
              Reset
            </>
          ) : (
            <>
              <PlayIcon className="mr-2" />
              Run
            </>
          )}
        </Button>
      </div>
    </div>
  );
}