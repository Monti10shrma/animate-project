// import React from 'react'
import monty from '../assets/monty.jpg'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-6xl leading-[5.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
         <div className='w-full  flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
               <h1 className='text-6xl'>Our approach:</h1>
               <button className=' flex uppercase gap-10 items-center  py-6 px-10 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
               </button>
            </div>
            <div className='w-1/2 h-[90vh] rounded-3xl bg-[#adb39b]'>
            <div className='h-[550px] w-[600px]  rounded-xl overflow-hidden'>
             <img src={monty} alt="Description" className='h-full w-full object-cover' />
            </div>
     
            </div>
            
         </div>
    </div>
  )
}

export default About
