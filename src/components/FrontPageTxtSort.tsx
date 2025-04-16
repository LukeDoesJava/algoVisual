import { useState, useEffect } from 'react';

export default function FrontPageTxtSort() {
  const originalText = "The quick brown fox jumps over the lazy dog";
  const [sortingText, setSortingText] = useState(originalText);
  const [sortingSteps, setSortingSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSorting, setIsSorting] = useState(true);
  
  // Generate all steps of bubble sort on text characters
  useEffect(() => {
    const generateBubbleSortSteps = () => {
      const steps: string[] = [];
      const chars = originalText.split('');
      
      // Create a copy of the array to work with
      steps.push(chars.join(''));
      
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < chars.length - 1; i++) {
          if (chars[i].toLowerCase() > chars[i + 1].toLowerCase()) {
            // Swap characters
            [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
            swapped = true;
            steps.push(chars.join(''));
          }
        }
      } while (swapped);
      
      return steps;
    };
    
    setSortingSteps(generateBubbleSortSteps());
  }, []);
  
  // Animate through the sorting steps
  useEffect(() => {
    if (sortingSteps.length === 0 || currentStep >= sortingSteps.length) {
      return;
    }
    
    const timer = setTimeout(() => {
      setSortingText(sortingSteps[currentStep]);
      if (currentStep < sortingSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } 
      
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentStep, sortingSteps]);
  
  return (
    <div className="bg-gray-900 text-white p-8 font-mono">
      <div className="max-w-xl mx-auto">
        {/* Container with relative positioning */}
        <div className="relative">
          {/* The static text */}
          <h2 className="text-4xl font-bold mb-16">
            {originalText}
          </h2>
          
          {/* The sorting text */}
          <div className="text-4xl font-bold text-gray-400 relative">
            {sortingText.split('').map((char, index) => (
              <span 
                key={index}
                className={char !== originalText[index] ? "text-green-400" : ""}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        
        {/* Simple controls */}
        <div className="mt-16 flex justify-center gap-4">
          <button 
            onClick={() => setIsSorting(!isSorting)}
            className="bg-white text-gray-900 px-4 py-2 font-bold"
          >
            {isSorting ? "Pause" : "Continue"}
          </button>
          <button 
            onClick={() => {
              setCurrentStep(0);
              setSortingText(originalText);
            }}
            className="border-2 border-white px-4 py-2"
          >
            Reset
          </button>
        </div>
        
        {/* Info about the sorting */}
        <div className="mt-8 text-gray-400">
          <p>Step {currentStep + 1} of {sortingSteps.length}</p>
          <p className="mt-2">Sorting alphabetically using bubble sort algorithm</p>
        </div>
      </div>
    </div>
  );
}