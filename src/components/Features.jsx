import { motion } from 'framer-motion';

const features = [
  {
    title: 'Realtime motion',
    desc: 'Smooth, GPU-accelerated animations and 3D scenes that run silky across devices.',
  },
  {
    title: 'Human-centered',
    desc: 'Interfaces designed with empathy, accessibility, and measurable outcomes.',
  },
  {
    title: 'Engineering-first',
    desc: 'Robust architecture, performance budgets, and obsessive attention to detail.',
  },
  {
    title: 'Brand storytelling',
    desc: 'Narrative flows and visuals that express your brand with clarity and energy.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why teams choose IGLOO.inc</h2>
          <p className="mt-3 text-white/70">A modern stack of craft, performance, and polish.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
