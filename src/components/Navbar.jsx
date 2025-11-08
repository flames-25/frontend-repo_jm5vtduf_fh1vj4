import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight text-zinc-900">
            Classic Café
          </a>
          <nav className="hidden items-center gap-8 sm:flex">
            <a href="#about" className="text-sm text-zinc-600 hover:text-zinc-900">About</a>
            <a href="#services" className="text-sm text-zinc-600 hover:text-zinc-900">Services</a>
            <a href="#testimonials" className="text-sm text-zinc-600 hover:text-zinc-900">Testimonials</a>
            <a href="#contact" className="rounded-full bg-amber-600 px-4 py-2 text-sm text-white hover:bg-amber-700">Visit Us</a>
          </nav>
          <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="mt-3 flex flex-col gap-2 sm:hidden">
            <a href="#about" className="text-sm text-zinc-700">About</a>
            <a href="#services" className="text-sm text-zinc-700">Services</a>
            <a href="#testimonials" className="text-sm text-zinc-700">Testimonials</a>
            <a href="#contact" className="text-sm text-zinc-700">Visit Us</a>
          </div>
        )}
      </div>
    </header>
  );
}
