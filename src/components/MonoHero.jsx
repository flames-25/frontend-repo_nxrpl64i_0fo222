import Spline from '@splinetool/react-spline';
import CloudBackground from './CloudBackground';

export default function MonoHero() {
  return (
    <section id="top" className="relative min-h-[100vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cloud overlay for monochrome theme - does not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <CloudBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            IGLOO.inc — Interactive Monochrome Worlds
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Scroll to explore layered animations, a 3D pipe with orbiting nodes, and immersive zoom-in content.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pipeline" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90">Explore the Pipe</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
