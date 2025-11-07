import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-sm font-medium transition-colors hover:text-white/90';

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToId('top')} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500"></div>
            <span className="font-semibold tracking-wide text-white">IGLOO.inc</span>
          </button>
          <div className="hidden md:flex items-center gap-8 text-white/80">
            <button onClick={() => scrollToId('features')} className={linkBase}>Features</button>
            <button onClick={() => scrollToId('showcase')} className={linkBase}>Showcase</button>
            <a href="#contact" className={`${linkBase} px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20`}>Contact</a>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 text-white/80">
            <div className="grid gap-2">
              <button onClick={() => scrollToId('features')} className="px-2 py-2 text-left hover:text-white">Features</button>
              <button onClick={() => scrollToId('showcase')} className="px-2 py-2 text-left hover:text-white">Showcase</button>
              <a href="#contact" className="px-2 py-2 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
