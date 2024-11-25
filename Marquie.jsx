//import React from 'react';
import { motion } from 'framer-motion';

function Marquie() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1 ' className="w-full py-12 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] mt-20">
      <div className=" text border-t-2 border-b-2 border-zinc-500 flex  overflow-hidden">
        
        <motion.h1
          initial={{ x: "100%" }}  
          animate={{ x: "-100%" }}  
          transition={{
            ease: "linear",
            repeat: Infinity,  
            duration: 10 , 
          }}
          className="  flex  text-[12vw] leading-none font-['Founder'] uppercase font-bold pr-10"
        >
         WE ARE OCHI  
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquie;
