export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Classic Café. All rights reserved.</p>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <a href="#home" className="hover:text-zinc-900">Home</a>
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#testimonials" className="hover:text-zinc-900">Testimonials</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
