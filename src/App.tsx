import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Revenue from './components/Revenue';
import Social from './components/Social';
import Inspiration from './components/Inspiration';
import Partners from './components/Partners';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Partners />
      <Revenue />
      <Careers />
      <Inspiration />
      <Social />
      <Contact />
    </main>
  );
}

export default App;