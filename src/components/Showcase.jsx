import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Grid',
    tag: 'WebGL + Motion',
    video: 'https://cdn.coverr.co/videos/coverr-synth-grid-4368/1080p.mp4',
  },
  {
    title: 'Liquid Interface',
    tag: 'Canvas + Physics',
    video: 'https://cdn.coverr.co/videos/coverr-liquid-waves-1470/1080p.mp4',
  },
  {
    title: 'City Lights',
    tag: 'Cinematic Web',
    video: 'https://cdn.coverr.co/videos/coverr-city-lights-4911/1080p.mp4',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
          <p className="mt-3 text-white/70">A peek into interactive stories we craft.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <video className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" autoPlay loop muted playsInline src={p.video}></video>
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wider text-white/60">{p.tag}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
