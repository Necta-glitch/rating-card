
import './App.css';
import star from './images/icon-star.svg'
import image from './images/illustration-thank-you.svg';
import {useState} from 'react';

function App() {
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [items, setItems] = useState("")

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="bg-gray-700 h-10 hover:bg-[#FF7811] hover:text-white w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-300 ">
        {number}
      </button>
    )
  }

  return (
    <>
    {!isSubmitted && (
    <div className="App">
      {/* Container box */}
     <div className=' bg-[#080c0f] h-screen flex flex-col items-center justify-center'>
      {/* Container card */}
      <div className='rating-card  w-[330px]  bg-[#252d37] h-80 rounded-[18px] '>
          <div className='p-6 space-y-4'>
            {/* Icon star */}
            <div className='rounded-full col-start-auto bg-[#2A303C] flex w-9 h-9 items-center justify-center'>
              <img src={star} alt="" />
            </div>
            {/* Text */}
            <div>
              <h1 className='pb-2 text-xl font-bold text-white '>How did we do?</h1>
              <p className='space-y-4 text-sm text-[#616872] text-left'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            {/* Rating elements */}
            <div className='flex flex-row justify-around pb-4'>
              <Button number={1} className=' flex  justify-evenly  items-center  cursor-pointer'></Button>
              <Button number={2} className=' flex  justify-evenly items-center   cursor-pointer'></Button>
              <Button number={3} className=' flex  justify-evenly items-center   cursor-pointer'></Button>
              <Button number={4} className=' flex  justify-evenly items-center   cursor-pointer'></Button>
              <Button number={5} className=' flex  justify-evenly items-center   cursor-pointer'></Button>
            </div>
            {/* Summit btn */}
            <div className='flex flex-row space-y-2 place-content-around '>
              <button  onClick={() => setIsSubmitted(true)}  className='btn_summit w-[260px] h-8 bg-[#FF7811] rounded-[22px] text-white hover:bg-white hover:text-[#FF7811]'>SUBMIT</button>
            </div>
          </div>
      </div>
     </div>
    </div>
    )}
    {isSubmitted && (
      <Summit_state items={items} setIsSubmitted={setIsSubmitted} />
    )}
  </>
  );
}


const Summit_state = ({ items }) =>{
  return (
  <div>
    {/* Card of submitted state */}
    <div className='bg-[#080c0f] h-screen flex flex-col items-center justify-center'>
        {/* Container card */}
            <div className=' w-[330px]  bg-[#252d37] h-80 rounded-[18px] '>
                {/* Container elements */}
                <div className='flex flex-wrap items-center p-6 pt-5 space-y-4 justify-evenly '>
                    {/* Image */}
                    <div className='pb-4'>
                        <img className='h-[78px]' src={image} alt="" />
                    </div>
                    {/* Rating selected */}
                    <div className='flex align-middle text-center pb-2 '>
                       <h2 className='w-[210px] h-9 pt-[9px] text-[14px] rounded-[22px]   bg-[#2A303C] text-[#FF7811]'>You selected <span>{items}</span> out of 5</h2> 
                    </div>
                    {/* Final message */}
                    <div className=' text-center justify-center'>
                      <h1 className='text-white text-[22px]'>Thank you!</h1>
                      <p className='text-[#616872] text-[13px]'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}
export default App;
