import Navbar from './components/Navbar';
import MonoHero from './components/MonoHero';
import ScrollLayers from './components/ScrollLayers';
import PipeSection from './components/PipeSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <MonoHero />
        <ScrollLayers />
        <PipeSection />
        <Contact />
      </main>
      <footer className="bg-black border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <p>© {new Date().getFullYear()} IGLOO.inc — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-white">Back to top</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
