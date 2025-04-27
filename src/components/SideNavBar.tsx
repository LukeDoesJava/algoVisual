import { HomeIcon, MapPinned, Layers, Map } from "lucide-react";
import { Github } from "lucide-react"; // Import icons

export default function SideNavBar() {
    return (
        <div
            style={{ zIndex: 1 }} // Bandaid fix for issue where grid clips through the sidebar
            className="fixed top-0 left-0 h-full w-64 bg-primary border-r-8 border-white z-45"
        >
            <div className="p-6">
                <h1
                    className="text-2xl bg-primary font-bold uppercase tracking-tight cursor-pointer text-accent mb-8"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    ALGO//VISUAL
                </h1>
                <nav>
                    <ul className="flex flex-col gap-6">
                        {[
                            {
                                href: "/",
                                label: "HOME",
                                icon: <HomeIcon className="w-5 h-5" />,
                                color: "hover:bg-white hover:text-gray-900",
                            },
                            {
                                href: "/pathfinding-visualizer",
                                label: "PATHFINDING",
                                icon: <Map className="w-5 h-5" />,
                                color: "hover:bg-red-900",
                            },
                            {
                                href: "/sorting-visualizer",
                                label: "SORTING",
                                icon: <Layers className="w-5 h-5" />,
                                color: "hover:bg-green-400 hover:text-gray-900",
                            },
                            {
                                href: "/",
                                label: "MAPS",
                                icon: <MapPinned className="w-5 h-5" />,
                                color: "hover:bg-blue-400 hover:text-gray-900",
                            },
                            // This should always be dead last
                            {
                                href: "https://github.com/LukeDoesJava/algoVisualizer",
                                label: "CODE",
                                icon: <Github className="w-5 h-5" />,
                                color: "hover:bg-black",
                            },
                            

                        ].map(({ href, label, icon, color }) => (
                            <a
                                key={label}
                                href={href}
                                className={`px-4 py-3 text-white rounded flex items-center gap-3 hover:font-semibold ${color}`}
                            >
                                <span className="flex items-center justify-center w-6 h-6">
                                    {icon}
                                </span>
                                <span className="flex-1">{label}</span>
                            </a>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}