//import React from 'react';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquie from './components/Marquie';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const scrollRef = useRef(null); 

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current, 
      smooth: true, 
    });

    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []); 

  return (
    <div ref={scrollRef} className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquie />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
