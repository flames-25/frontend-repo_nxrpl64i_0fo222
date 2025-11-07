import { useEffect, useRef } from 'react';

// Interactive black & white cloud background with subtle parallax
export default function CloudBackground() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1..1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      if (layer1.current) layer1.current.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
      if (layer2.current) layer2.current.style.transform = `translate3d(${x * -12}px, ${y * -12}px, 0)`;
      if (layer3.current) layer3.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft monochrome clouds made from layered radial gradients */}
      <div ref={layer1} className="absolute inset-[-20%] opacity-70"
           style={{
             background:
               'radial-gradient(60% 40% at 20% 30%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%),\
                radial-gradient(50% 35% at 70% 20%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%),\
                radial-gradient(70% 50% at 60% 80%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
             filter: 'blur(10px)'
           }}
      />
      <div ref={layer2} className="absolute inset-[-30%] opacity-50"
           style={{
             background:
               'radial-gradient(45% 35% at 30% 60%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%),\
                radial-gradient(55% 40% at 80% 60%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
             filter: 'blur(12px)'
           }}
      />
      <div ref={layer3} className="absolute inset-[-40%] opacity-40"
           style={{
             background:
               'radial-gradient(50% 40% at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
             filter: 'blur(16px)'
           }}
      />
      {/* Grain to add depth while staying monochrome */}
      <svg className="absolute inset-0 w-full h-full mix-blend-soft-light opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      {/* Edge vignetting */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
