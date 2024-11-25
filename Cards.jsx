//import React from 'react'

function Cards() {
    return (
      <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        {/* First Card */}
        <div className="cardcontainer relative h-[50vh] w-1/2">
          <div className="w-full rounded-xl h-full flex items-center justify-center bg-[#004D43]">
            <img 
              className="w-32" 
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
              alt="ochi" 
            />
            <button className="absolute px-4 py-1 rounded-full border-2 left-10 bottom-10">
              &copy;2019-2022
            </button>
          </div>
        </div>
  
        {/* Second Card Container */}
        <div className="cardcontainer relative flex gap-5 h-[50vh] w-1/2">
          {/* Second Card */}
          <div className="w-1/2 h-full flex items-center justify-center rounded-xl bg-zinc-900">
            <img 
              className="w-20" 
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
              alt="clutch" 
            />
          </div>
          {/* Third Card */}
          <div className="w-1/2 h-full flex items-center justify-center rounded-xl bg-zinc-800">
            <img 
              className="w-20" 
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  
              alt="alumni" 
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
  