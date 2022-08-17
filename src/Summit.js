import React from 'react'
import image from './images/illustration-thank-you.svg';


function summit() {
  return (
    <div className='summit'>
        {/* Card of submitted state */}
        <div className='bg-[#080c0f] h-screen flex flex-col items-center justify-center'>
        {/* Container card */}
            <div className=' w-[330px]  bg-[#252d37] h-80 rounded-[18px]'>
                {/* Container elements */}
                <div className='flex flex-wrap items-center p-6 pt-6 space-y-4 justify-evenly'>
                    {/* Image */}
                    <div className='pb-4'>
                        <img src={image} alt="" />
                    </div>
                    {/* Rating selected */}
                    <div className='flex align-middle text-center '>
                       <h2 className='w-[250px] h-9   bg-white'>You selected <span>4</span> out of 5 Thank you!</h2> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default summit