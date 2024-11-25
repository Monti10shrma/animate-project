//import React from 'react'
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed='-.3' className='W-full h-screen bg-black pt-1 text-white'>
      <div className='textstructure mt-40 px-20 '>

        <div className='masker '>
          <h1 className=' text-9xl  leading-[6vw] tracking-tighter uppercase font-small'>
            We Create</h1>
        </div>
        <div className="flex items-center">

  <motion.div initial={{width:0}} animate ={{width:'12vw'}}
   transition={{ease:[0.76 , 0, 0.24, 1] , duration:1}} 
   className=" mr-[1vw] w-[12vw] h-[6.6vw] rounded-md relative bg-green-500 -top-[-1.2vw]"></motion.div>
  <div className="masker">
    <h1 className="text-9xl leading-[10vw] tracking-tighter uppercase font-small pl-[40px]">
      Eye-Opening
    </h1>
  </div>
</div>


        <div className='masker '>
          <h1 className=' text-9xl  leading-[6vw] tracking-tighter uppercase font-small'>
            PRESENTATIONS</h1>
        </div>

      </div>
      <div className="border-t-[1px] border-zinc-800  bg-white  text-black mt-32 flex justify-between iteam-center py-5 px-20 uppercase"  >
    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
    <p key={index} className="text-md font-light tracking-tight leading-none">
      {item}
    </p>
  ))}


<div className="Start flex items-center gap-6"> 
  <div className="px-4 py-3 border-[1px] border-zinc-600 bg-white text-black rounded-full font-light text-md  uppercase">
    Start the project
  </div>
  <div className="h-10 w-10 flex items-center justify-center  border-[2px] border-zinc-600  bg-white text-black rounded-full">
    <span className='rotate-[45 deg]'>
    <MdOutlineArrowOutward />
    </span>

  </div> 


  </div>
</div>

      
    </div>
  )
}

export default LandingPage
