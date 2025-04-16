import { useState } from 'react';
import { ArrowRight, Code, Play, Shuffle } from 'lucide-react';
import FrontPageTxtSort from './components/FrontPageTxtSort';
export default function BrutalistAlgorithmVisualizer() {
  
  return (
    <div className="bg-gray-900 min-h-screen text-white font-mono">
      {/* Main Hero */}
      <div className="bg-gray-800 border-b-8 border-white">
        <div className="mx-auto max-w-6xl p-6 py-24">
          <h2 className="text-8xl font-bold uppercase mb-6">VISUALIZE ALGORITHMS</h2>
          <p className="text-2xl mb-12 max-w-3xl">
            I failed an interview because I couldn't explain BFS on a whiteboard,
            so I made this so that I could learn it better, and hopefully help you too.
            <br />           
            <br />
            Read about the logic, watch algorithms work in real time, and hopefully learn something cool.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-gray-900 text-xl px-8 py-4 font-bold flex items-center gap-2 hover:bg-gray-300">
              START NOW <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <FrontPageTxtSort />

      {/* Call to Action */}
      <div className="bg-white text-gray-900 mt-16">
        <div className="mx-auto max-w-6xl p-32 py-32">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-4xl font-bold uppercase mb-4 md:mb-0">PATHFINDING VISUALISER</h3>
            <button className="bg-gray-900 text-white text-xl px-8 py-4 font-bold hover:bg-gray-700">
              CHECK IT OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}