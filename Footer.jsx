//import React from 'react'

function Footer() {
  return (
    <div className=" flex w-full h-screen py-20 px-20 bg-zinc-900">
        <div className="w-1/2  h-full flex flex-col justify-between font-semibold">
        <div className="heading">
        <h1 className="text-[7vw] uppercase  -mb-10">EYE-</h1>
        <h1 className="text-[7vw] uppercase -mb-10">Opening</h1>
        </div>
        <h3 className="font-medium uppercase">Ochi</h3>
        
        
        </div>
        <div className="w-1/2">
        <h1 className="text-[5vw] font-semibold  uppercase  -mb-15">
            Presentations</h1>
            <div className="dets font-['Neue_Montreal'] mt-10">
                <a className="block text-xl font-light " href="#">Facebook</a>
                <a className="block text-xl font-light  " href="#">Instagram</a>
                <a className="block text-xl  font-light" href="#">Twitter</a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
