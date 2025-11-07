import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-fuchsia-300">
            Building futuristic digital experiences
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            IGLOO.inc crafts immersive interfaces with 3D, motion, and delightful UX. We blend art and engineering to create interactive web that feels alive.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/90 px-5 py-2.5 text-sm font-semibold text-black hover:bg-white">
              Start a project
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black"></div>
    </section>
  );
}
