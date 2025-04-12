import { JSX, useEffect, useRef, useState } from 'react';

// Define a type for particles
interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
}

export default function AlgorithmsVisualizerHomePage(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoverMaze, setHoverMaze] = useState<boolean>(false);
  const [hoverSort, setHoverSort] = useState<boolean>(false);

  // Animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Early return if canvas doesn't exist
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Early return if context can't be obtained
    
    let animationFrameId: number;
    let particles: Particle[] = [];

    // Set canvas size
    const handleResize = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Create particles
    function initParticles(): void {
      particles = [];
      if (!canvas) return;
      
      const particleCount = Math.floor(canvas.width * canvas.height / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim(),
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5
          }
        });
      }
    }

    // Draw animation
    const render = (): void => {
      if (!canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update particle position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y;
        }
      });

      // Draw connections
      ctx.strokeStyle = `${getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()}33`; // Using hex opacity (33 = 20%)
      ctx.lineWidth = 0.3;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight text-white">
          Algorithm Visualizer(s)
        </h1>
        
        {/* Author */}
        <p className="text-lg mb-12" style={{ color: 'var(--accent)' }}>
          by Luke Edwards
        </p>
        
        {/* Navigation buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          <a 
            href="/pathfinding-visualizer"
            className="relative group px-8 py-4 rounded-lg transition-all duration-300"
            style={{ 
              backgroundColor: hoverMaze ? 'var(--accent)' : 'var(--secondary)',
              color: hoverMaze ? 'var(--primary)' : 'var(--text)'
            }}
            onMouseEnter={() => setHoverMaze(true)}
            onMouseLeave={() => setHoverMaze(false)}
          >
            <div className="flex items-center justify-center">
              <span className="text-xl font-semibold">Pathfinder Visualizer</span>
              <svg 
                className={`ml-2 w-6 h-6 transition-transform duration-300 ${hoverMaze ? 'translate-x-1' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
            <div 
              className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${hoverMaze ? 'w-full' : 'w-0'}`}
              style={{ backgroundColor: 'var(--accent)' }}
            ></div>
          </a>
          
          <a 
            href="/sorting-visualizer"
            className="relative group px-8 py-4 rounded-lg transition-all duration-300"
            style={{ 
              backgroundColor: hoverSort ? 'var(--accent)' : 'var(--secondary)',
              color: hoverSort ? 'var(--primary)' : 'var(--text)'
            }}
            onMouseEnter={() => setHoverSort(true)}
            onMouseLeave={() => setHoverSort(false)}
          >
            <div className="flex items-center justify-center">
              <span className="text-xl font-semibold">Sorting Visualizer</span>
              <svg 
                className={`ml-2 w-6 h-6 transition-transform duration-300 ${hoverSort ? 'translate-x-1' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
            <div 
              className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${hoverSort ? 'w-full' : 'w-0'}`}
              style={{ backgroundColor: 'var(--accent)' }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
}