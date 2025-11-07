import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Multi-layer scroll animation section for storytelling
export default function ScrollLayers() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={ref} className="relative bg-black text-white py-40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Layered scroll animations</h2>
          <p className="mt-3 text-white/70">Parallax content layers that move at different speeds to create depth in a monochrome world.</p>
        </div>
        <div className="relative h-[520px]">
          <motion.div style={{ y: y1, opacity }} className="absolute inset-x-0 top-0">
            <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Narrative Layer</h3>
              <p className="mt-2 text-white/70">Introduce the idea with crisp copy and subtle motion.</p>
            </div>
          </motion.div>
          <motion.div style={{ y: y2, opacity }} className="absolute inset-x-0 top-24">
            <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Evidence Layer</h3>
              <p className="mt-2 text-white/70">Support it with data, visuals, and interactions.</p>
            </div>
          </motion.div>
          <motion.div style={{ y: y3, opacity }} className="absolute inset-x-0 top-48">
            <div className="mx-auto max-w-5xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">CTA Layer</h3>
              <p className="mt-2 text-white/70">Conclude with a clear next step.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
