import FrontPageTxtSort from './components/FrontPageTxtSort';

export default function BrutalistAlgorithmVisualizer() {
  return (
    <div className="flex">
      {/* The sidebar space is accounted for with this empty div that matches sidebar width */}
      <div className="w-64 flex-shrink-0"></div>
      
      {/* Main content shifted to the right of sidebar */}
      <div className="flex-grow bg-primary min-h-screen text-white font-mono">
        {/* Main Hero */}
        <div className="bg-secondary border-b-8 border-white">
          <div className="mx-auto max-w-6xl p-6 py-12 md:py-24">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase mb-6 text-center md:text-left">
              VISUALIZE ALGORITHMS
            </h2>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 max-w-3xl text-center md:text-left mx-auto md:mx-0">
              I failed an interview because I couldn't explain BFS on a whiteboard,
              so I made this so that I could learn it better, and hopefully help you too.
              <br />
              <br />
              Read about the logic, watch algorithms work in real time, and hopefully learn something cool.
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto p-6">
          <FrontPageTxtSort />
        </div>

        {/* Call to Action */}
        <div className="bg-white text-gray-900 mt-16">
          <div className="mx-auto max-w-6xl p-8 md:p-16 lg:p-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-2xl md:text-4xl font-bold uppercase text-center md:text-left">
                PATHFINDING VISUALISER
              </h3>
              <button
                onClick={() => (window.location.href = '/pathfinding-visualizer')}
                className="bg-gray-900 text-white text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 font-bold hover:bg-gray-700"
              >
                CHECK IT OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}