import React from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeft, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const DateSeleect = ({dateTime,id}) => {
    const [selected, setselected] = useState(null);
    const navigate=useNavigate();
    const onBookHandler = () => {
    if (!selected) {
        return toast('Please select a date first')
    }
    else{
        navigate(`/movies/${id}/${selected}`);
        scrollTo(0,0);
    }
}
  return (
    <div id='dateselect' className='max-w-8xl mx-auto px-4 md:px-0 my-30 py-25 '>
      <div className='flex flex-col md:flex-row item-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
      <BlurCircle  top="-100px" left="-100px"/>
      <BlurCircle  top="0px" right="0px"/>
      <div>
        <p className='text-lg font-semibold'>Choose Date</p>
        <div className='flex item-center gap-6 text-sm mt-5'>
            <ChevronLeftIcon width={28} className='mt-4'/>
            <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                {Object.keys(dateTime).map((date)=>(
                    <button onClick={()=>{
                        setselected(date);
                    }} key={date} className={`flex flex-col  rounded-md items-center justify-center h-14 w-14 aspect-square-rounded cursor-pointer ${selected===date?"bg-primary text-white":"border border-primary/70"}`}> 
                        <span>{new Date(date).getDate()}</span>
                        <span>{new Date(date).toLocaleDateString("en-US",{month:"short"})}</span>
                    </button>

                ))}
            </span>
            <ChevronRightIcon width={28} className='mt-4'/>
        </div>
      </div>
      <button onClick={onBookHandler} className='bg-primary text-white max-h-15 px-8 py-2 mt-6 rounded hover:bg-primary/90 transititon-all cursor-pointer'>Book Now</button>
      </div>
    </div>
  )
}

export default DateSeleect
