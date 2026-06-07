'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const favoritePlaces = [
  { name: "Café Bateel", emoji: "☕", vibe: "best coffee in riyadh" },
  { name: "Najd Village", emoji: "🍽️", vibe: "authentic saudi cuisine" },
  { name: "Sfeen Restaurant", emoji: "🥘", vibe: "hidden gem" },
  { name: "Al Nakheel Mall", emoji: "🛍️", vibe: "weekend errands" },
  { name: "King Abdullah Park", emoji: "🌳", vibe: "evening walks" },
  { name: "Diriyah", emoji: "🏛️", vibe: "best spot in the city" },
  { name: "Riyadh Season venues", emoji: "🎭", vibe: "always something on" },
];

export default function LocationBadge() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [showSpots, setShowSpots] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Riyadh',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(new Date());
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSpots(false);
      }
    };

    if (showSpots) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSpots]);

  return (
    <div ref={dropdownRef} className="relative flex flex-col items-end">
      <button
        onClick={() => setShowSpots(!showSpots)}
        className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 border border-foreground/10 bg-background/80 backdrop-blur-sm
          hover:border-accent/30 transition-all duration-300 cursor-pointer group"
        title="Click to see my favorite Riyadh spots"
      >
        <span className="text-[12px] md:text-[14px] transition-transform duration-300 group-hover:scale-110">
          📍
        </span>
        
        <div className="relative w-5 h-5 md:w-6 md:h-6 overflow-hidden">
          <Image
            src="/riyadh.jpg"
            alt="Riyadh"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] md:text-[11px] font-mono text-muted whitespace-nowrap">
            Riyadh, Saudi Arabia
          </span>
          {currentTime && (
            <span className="text-[9px] md:text-[10px] font-mono text-muted/60">
              {currentTime}
            </span>
          )}
        </div>
      </button>

      {showSpots && (
        <div className="absolute top-full right-0 mt-2 w-[85vw] md:w-72 max-w-[300px] border border-foreground/10 bg-background shadow-lg 
          animate-fadeIn z-50 p-3 md:p-4 max-h-[70vh] md:max-h-96 overflow-y-auto">
          <div className="mb-3 pb-2 border-b border-foreground/10">
            <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
              my favorite riyadh spots
            </p>
          </div>
          <div className="space-y-2">
            {favoritePlaces.map((place, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 text-[12px] font-mono group/item cursor-default
                  hover:translate-x-1 transition-transform duration-200"
              >
                <span className="text-[14px] flex-shrink-0">{place.emoji}</span>
                <div className="flex flex-col">
                  <span className="text-foreground group-hover/item:text-accent transition-colors">
                    {place.name}
                  </span>
                  <span className="text-[10px] text-muted/70 italic">
                    {place.vibe}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowSpots(false)}
            className="mt-3 pt-2 border-t border-foreground/10 w-full text-[10px] font-mono text-muted 
              hover:text-accent transition-colors text-center"
          >
            close →
          </button>
        </div>
      )}
    </div>
  );
}