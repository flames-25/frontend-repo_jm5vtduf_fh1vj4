import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
