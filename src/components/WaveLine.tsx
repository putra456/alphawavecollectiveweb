import React from 'react';

interface WaveLineProps {
  className?: string;
  variant?: 'hero' | 'section';
}

const WaveLine: React.FC<WaveLineProps> = ({ className = '', variant = 'section' }) => {
  const paths = {
    hero: "M-100,300 Q200,200 400,280 T800,250 T1200,300 T1600,280 T2000,320",
    section: "M-100,200 Q150,280 350,180 T750,250 T1150,200 T1550,260 T1950,220"
  };

  return (
    <svg 
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 1800 400"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2D6BFF" stopOpacity="0" />
          <stop offset="20%" stopColor="#2D6BFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#5B8FFF" stopOpacity="1" />
          <stop offset="80%" stopColor="#2D6BFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2D6BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={paths[variant]}
        fill="none"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        filter="url(#waveGlow)"
        className="wave-animate"
      />
    </svg>
  );
};

export default WaveLine;
