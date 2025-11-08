import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="text-zinc-600 leading-7">
              Nestled in the heart of the city, Classic Café has been a cozy corner for conversations,
              first dates, and creative sparks since 1998. We roast in small batches, bake fresh every
              morning, and believe that a great cup of coffee brings people together.
            </p>
            <p className="text-zinc-600 leading-7">
              Our beans are ethically sourced from family-owned farms, our milk comes from local dairies,
              and our menu is crafted with a balance of classic favorites and seasonal specials.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-amber-100 blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop"
                alt="Inside Classic Café"
                className="relative z-10 rounded-2xl shadow-lg ring-1 ring-black/5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
