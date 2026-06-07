"use client";

import { useState, useRef, useEffect } from "react";

const placesLived = [
  { name: "Cairo, Egypt", emoji: "🏛️", vibe: "where it all started", x: 10 },
  { name: "Montreal, Canada", emoji: "🎓", vibe: "mcgill years", x: 40 },
  { name: "Dubai, UAE", emoji: "🌆", vibe: "deloitte days", x: 70 },
  { name: "Riyadh, Saudi Arabia", emoji: "🌴", vibe: "home now", x: 90 },
];

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);
  const [animating, setAnimating] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!showPlaces) {
      setAnimating(true);
    } else {
      setAnimating(false);
    }
    setShowPlaces(!showPlaces);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowPlaces(false);
        setAnimating(false);
      }
    };

    if (showPlaces) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPlaces]);

  return (
    <div className="relative">
      <div 
        className="group relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="relative">
          <h1 className="text-[22px] md:text-[2.0rem] font-serif leading-tight transition-all duration-300">
            <span className="relative inline-block">
              Karim Abouel Seoud
              <span 
                className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-0'
                }`}
              />
            </span>
          </h1>
          
          <div className={`hidden md:block absolute -bottom-6 left-0 text-[10px] font-mono text-accent uppercase tracking-widest transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            AI strategy · public sector · GCC
          </div>
        </div>
      </div>

      {showPlaces && (
        <div ref={modalRef} className="absolute top-full left-0 mt-8 w-[90vw] max-w-[550px] md:w-[550px] border border-foreground/10 bg-background shadow-lg 
          animate-fadeIn z-50 p-4 md:p-6">
          <div className="mb-6">
            <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
              places i've called home
            </p>
          </div>
          
          <div className="relative w-full h-[180px] mb-4">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 180" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B4513" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8B4513" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path 
                d="M 30 150 Q 150 120, 200 80 T 460 40" 
                stroke="url(#pathGradient)" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            
            <div className="absolute" style={{ left: '5.5%', top: '83%' }}>
              <span className="text-[20px]">🏛️</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Cairo, Egypt</div>
              <div className="text-[8px] font-mono text-muted/60 italic">where it all started</div>
            </div>
            <div className="absolute" style={{ left: '27%', top: '56%' }}>
              <span className="text-[20px]">🎓</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Montreal, Canada</div>
              <div className="text-[8px] font-mono text-muted/60 italic">mcgill years</div>
            </div>
            <div className="absolute" style={{ left: '51%', top: '33%' }}>
              <span className="text-[20px]">🌆</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Dubai, UAE</div>
              <div className="text-[8px] font-mono text-muted/60 italic">deloitte days</div>
            </div>
            <div className="absolute" style={{ left: '82%', top: '22%' }}>
              <span className="text-[20px]">🌴</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Riyadh, Saudi Arabia</div>
              <div className="text-[8px] font-mono text-muted/60 italic">home now</div>
            </div>
            
            {animating && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 180" preserveAspectRatio="xMidYMid meet">
                <text 
                  fontSize="24" 
                  style={{
                    offsetPath: 'path("M 30 150 Q 150 120, 200 80 T 460 40")',
                    animation: 'bikeRide 6s ease-in-out forwards',
                    transform: 'scaleX(-1)'
                  }}
                >
                  🚴
                </text>
              </svg>
            )}
          </div>
          
          <button
            onClick={() => {
              setShowPlaces(false);
              setAnimating(false);
            }}
            className="mt-4 pt-3 border-t border-foreground/10 w-full text-[10px] font-mono text-muted 
              hover:text-accent transition-colors text-center"
          >
            close →
          </button>
        </div>
      )}
      
      <style jsx>{`
        @keyframes bikeRide {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}