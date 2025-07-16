import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import isoTimeFormat from '../lib/isoTimeFormat';
import BlurCircle from '../components/BlurCircle';
import { toast } from 'react-hot-toast';
const SeatLayout = () => {
  const {id,date}=useParams();
  const [selectedSeats, setselectedSeats] = useState([]);
  const [selectedTime, setselectedTime] = useState(null);
  const [show, setshow] = useState(null);
  const navigate = useNavigate();
  const groupRows=[['A','B'],['C','D'],['E','F'],['G','H'],['I','J']];
  const getShow = async ()=>{
    const show=await dummyShowsData.find(show=> show._id==id);
    if(show)
    {
      setTimeout(()=>{setshow({
      movie:show,
      dateTime: dummyDateTimeData
    })},2000);
    }
  }
  const handleSeatClick = (seatId) => {
    if(!selectedTime){
      return toast.error('Please select a time first');
    }
    if(selectedSeats.length>4 && !selectedSeats.includes(seatId)){
      return toast.error('You can only select up to 5 seats');
    }
    if(selectedSeats.includes(seatId)){
      setselectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setselectedSeats([...selectedSeats, seatId]);
    } 
  }
  const renderSeates=(row,count=9)=>(
    <div className='flex gap-2 mt-2' key={row}>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {Array.from({length:count},(_,i)=>{
          const seatId = `${row}${i+1}`;
          return (
            <button key={seatId} onClick={()=>handleSeatClick(seatId)} className={`h-8 w-8 rounded border text-gray-500 border-primary/60 cursor-pointer ${selectedSeats.includes(seatId)?'bg-primary text-white':'hover:bg-primary-dull/20 hover:text-white'}` }>{seatId}</button>)
        })}
      </div>
    </div>
  )

  useEffect(() => {
    getShow();
  }, [id])
  
  return show?(
    <div className='flex flex-col gap-y-2  md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50 md:gap-5 gap-10'>
      <div className='flex flex-col w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
      <p className='text-lg  font-semibold px-6'>Available Timings</p>
      <div className='mt-5 space-y-1'>
        {show.dateTime[date].map((item)=>(
          <div key={item.time} onClick={()=>{
            setselectedTime(item);
          }} className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${selectedTime?.time === item.time ? 'bg-primary text-white' : 'hover:bg-primary-dull hover:text-white'}`}>
            <ClockIcon className='w-4 h-4'/>
            <p className='text-sm'>{isoTimeFormat(item.time)}</p>
          </div>
        ))

        }
      </div>
      </div>

      <div className='relative flex-1 flex flex-col items-center max-md:mt-16 gap-5'>
        <BlurCircle top='-100px' left='-400px'/>
        <BlurCircle bottom='0px' right='100px'/>
        <h1 className='text-2xl font-semibold mb-4'>Select Your Seat</h1>
        <img src={assets.screen} alt="screen" className='fill-primary' />
        <p className='text-gray-400 text-sm mb-6'>SCREEEN SIDE</p>

        <div className='flex flex-col item-center justify-center mt-10 text-xs text-gray-300'>
          <div className='flex flex-row md:flex-col items-center gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row => renderSeates(row))}
          </div>
          <div className='grid grid-cols-2 gap-11'>
            {groupRows.slice(1).map((group, index) => (
              <div key={index}>
                {group.map(row => renderSeates(row))}
              </div>
            ))}
          </div>
        </div>
        <button className='group flex hover:bg-primary-dull transition active:scale-95 items-center  justify-center w-70 h-10 rounded-full bg-primary gap-2 p-5 md:mt-20 mt-15 cursor-pointer'><p>Proceed To Checkout</p> <ArrowRightIcon className='group-hover:translate-x-0.5 ' strokeWidth={3} /></button>
      </div>
    </div>
  ):(
      <Loading />
  )
}

export default SeatLayout
