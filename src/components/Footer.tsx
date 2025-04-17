
export default function Footer () {
    return (
        <footer className="border-t-8 border-white bg-gray-900 text-white font-mono">
        <div className="mx-auto max-w-6xl p-6 py-8">
            <div className="flex justify-between items-center">
                <div>
                <h4 className="text-xl font-bold">ALGO//VISUAL</h4>
                <p className="mt-2">© 2025 Luke Edwards, made with React + TS</p>
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                    <a href="https://github.com/LukeDoesJava" className="hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/luke-edwards-670181270/" className="hover:underline">LinkedIn</a>
                    <a href="mailto:luke0edwardss@gmail.com" className="hover:underline">Email me</a>
                    <a href="https://www.lukepe.com" className="hover:underline">Website & Resume</a>
                </div>
            </div>
        </div>
        </footer>
    )
};