import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 3D pipe illusion using CSS and parallax; items revolve as you scroll. Clicking an item zooms into content.
export default function PipeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Rotation of ring based on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const depth = useTransform(scrollYProgress, [0, 1], [600, 1200]);

  const items = useMemo(() => (
    [
      { id: 'vision', title: 'Vision', content: 'Clarity in motion and form.' },
      { id: 'craft', title: 'Craft', content: 'Precision, detail, reliability.' },
      { id: 'play', title: 'Play', content: 'Joyful, tactile interactions.' },
      { id: 'scale', title: 'Scale', content: 'From prototype to planet.' },
    ]
  ), []);

  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="pipeline" ref={ref} className="relative bg-black text-white py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Monochrome Pipe — Scroll to orbit</h2>
          <p className="mt-3 text-white/70">A hollow 3D tube with orbiting nodes. Scroll to rotate the ring. Click a node to dive into its content.</p>
        </div>
      </div>

      {/* Pipe core */}
      <div className="relative mx-auto h-[520px] w-full max-w-5xl">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* tube body */}
          <div className="relative h-72 w-[90%] max-w-4xl rounded-full"
               style={{
                 background:
                   'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(255,255,255,0.02))',
                 boxShadow:
                   'inset 0 30px 80px rgba(255,255,255,0.08), inset 0 -30px 80px rgba(0,0,0,0.6), 0 10px 40px rgba(0,0,0,0.6)'
               }}
          >
            {/* hollow effect using inner mask */}
            <div className="absolute inset-8 rounded-full"
                 style={{
                   background:
                     'radial-gradient(closest-side, rgba(0,0,0,0.85), rgba(0,0,0,1))',
                   boxShadow: 'inset 0 0 80px rgba(0,0,0,0.9)'
                 }}
            />
            {/* rim highlights */}
            <div className="pointer-events-none absolute inset-0 rounded-full"
                 style={{
                   background:
                     'linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.25))'
                 }}
            />
          </div>
        </div>

        {/* Orbiting ring */}
        <motion.div style={{ rotate: rotation }} className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-72 w-[90%] max-w-4xl">
            {items.map((it, i) => {
              const angle = (i / items.length) * Math.PI * 2;
              const x = Math.cos(angle) * 40; // px offset
              const y = Math.sin(angle) * 40;
              return (
                <button
                  key={it.id}
                  onClick={() => setActive(it)}
                  className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <span className="block h-14 w-14 rounded-full border border-white/30 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />
                  <span className="mt-2 block text-center text-xs text-white/70 group-hover:text-white">{it.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Z-depth hinting */}
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.15, 0.35]) }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.05),rgba(255,255,255,0)_60%)]" />
      </div>

      {/* Modal zoom dive */}
      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setActive(null)} />
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="relative z-[61] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 p-0"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{active.title}</h3>
              <p className="mt-2 text-white/70">{active.content}</p>
            </div>
            <div className="relative h-72">
              {/* 3D zoom animation using perspective */}
              <div className="absolute inset-0 [perspective:1000px] overflow-hidden">
                <motion.div
                  initial={{ rotateX: 15, translateZ: -200, opacity: 0 }}
                  animate={{ rotateX: 0, translateZ: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute left-1/2 top-1/2 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 shadow-2xl"
                  style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_50%,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6">
              <button onClick={() => setActive(null)} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black">Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
