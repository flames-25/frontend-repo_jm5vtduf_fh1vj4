import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-800">
              <Coffee className="h-4 w-4" />
              <span className="text-sm font-medium">Since 1998</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              Classic Café
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Where timeless aromas meet modern comfort. Handcrafted coffee, artisan pastries,
              and a warm neighborhood spirit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#services"
                className="rounded-full bg-amber-600 px-6 py-3 text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Explore Menu
              </a>
              <a
                href="#about"
                className="rounded-full border border-zinc-200 px-6 py-3 text-zinc-900 transition hover:bg-zinc-50"
              >
                Our Story
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-amber-200 via-rose-100 to-white blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
                alt="Freshly brewed coffee"
                className="relative z-10 rounded-3xl shadow-xl ring-1 ring-black/5"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
