import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const quotes = [
  {
    name: 'Ava R.',
    text: 'The best cappuccino in town. Cozy atmosphere and friendly staff — my morning ritual!',
  },
  {
    name: 'Leo M.',
    text: 'Their croissants are heavenly. You can taste the butter and the love in every bite!',
  },
  {
    name: 'Sofia K.',
    text: 'Perfect spot to read and unwind. The music, the coffee, the people — all spot on.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">What Guests Say</h2>
          <p className="mt-3 text-zinc-600">Real words from our community.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-zinc-700">“{q.text}”</p>
              <cite className="mt-4 block text-sm font-semibold not-italic text-zinc-900">{q.name}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
