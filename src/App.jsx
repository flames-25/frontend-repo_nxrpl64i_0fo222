import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
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
