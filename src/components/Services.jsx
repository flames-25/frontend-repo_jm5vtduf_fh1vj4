import { motion } from 'framer-motion';
import { Coffee, Croissant, IceCream2, Sandwich } from 'lucide-react';

const services = [
  {
    icon: Coffee,
    title: 'Specialty Coffee',
    desc: 'Espresso, pour-over, cold brew — crafted to perfection with freshly roasted beans.'
  },
  {
    icon: Croissant,
    title: 'Fresh Pastries',
    desc: 'Croissants, muffins, and cakes baked in-house every morning.'
  },
  {
    icon: Sandwich,
    title: 'Artisan Bites',
    desc: 'Gourmet sandwiches and seasonal toasts made with local ingredients.'
  },
  {
    icon: IceCream2,
    title: 'Iced & Seasonal',
    desc: 'Refreshing iced blends and rotating seasonal specials to match the weather.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">What We Serve</h2>
          <p className="mt-3 text-zinc-600">Comforting classics with a modern twist.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
