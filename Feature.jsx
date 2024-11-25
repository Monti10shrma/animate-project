import  { useState } from 'react';
import { motion } from 'framer-motion';

function Feature() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-5xl font-['Neue_Montreal'] text-white">Featured Project</h1>
      </div>
      <div className="px-20 py-10">
        <div className="cards w-full flex gap-10">
          
          {/* First Card */}
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[75vh] rounded-xl bg-zinc-300 overflow-hidden"
          >
            <h1 className="absolute  flex  overhidden tracking-tight text-[#CDEA68] z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-full font-semibold text-8xl">
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={isHovering ? { y: '0%' } : { y: '100%' }}
                  transition={{ ease: [0.22 , 1, 0.36, 1], delay: index * 0.6 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="fyde"
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="cardcontainer relative w-1/2 h-[75vh] rounded-xl bg-zinc-600 overflow-hidden">
            <h1 className="absolute flex  overhidden tracking-tight text-[#CDEA68] z-10 top-1/2 -translate-y-1/2 translate-x-1/2 right-full font-semibold text-8xl">
              {"VISA".split('').map((item, index) => (
                 <motion.span
                 key={index}
                 initial={{ y: '100%' }}
                 animate={isHovering ? { y: '0%' } : { y: '100%' }}
                 transition={{ ease: [0.22 ,1,0.36 ,1 ], delay: index * 0.6 }}
               >
                 {item}
               </motion.span>
               
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="visa"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Feature;
