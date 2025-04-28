import { Button } from "../../../components/ui/button";
import { PencilIcon, EraserIcon, SquareX } from "lucide-react";
import { useEditTile }  from "../hooks/UseEditTile";

export function ControlPanel() {

    const { isDrawing, toggleDrawing } = useEditTile();

    return (
        <div className="flex flex-row py-4 justify-center items-end space-x-3">
                <Button
                    onClick={() => toggleDrawing(true)}
                    className={`${
                        isDrawing ? "bg-green-800" : "bg-green-400 hover:bg-green-800"
                    } text-white font-bold rounded px-4 py-2 inline-flex items-center`}
                >
                    <PencilIcon className="h-5 w-5" />
                    <span className="ml-2">Draw Walls</span>
                </Button>
                <Button
                    onClick={() => toggleDrawing(false)}
                    className={`${
                        !isDrawing ? "bg-red-900" : "bg-red-500 hover:bg-red-900"
                    } text-white font-bold rounded px-4 py-2 inline-flex items-center`}
                >
                    <EraserIcon className="h-5 w-5" />
                    <span className="ml-2">Eraser</span>
                </Button>
        </div>
    );
}
