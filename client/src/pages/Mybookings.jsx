import React, { useState, useEffect } from 'react'
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const Mybookings = () => {
  const currency=import.meta.env.VITE_CURRENCY || '$';

  const [bookings, setbookings] = useState([])
  const [isLoading, setisLoading] = useState(true);

  const fetchBookings = async () => {
    setbookings(dummyBookingData);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 min-h-[80vh]'>
      <BlurCircle top="100px" left="100px"/>
      <BlurCircle top="0px" right="0px"/>
    </div>
  ):<Loading/>
}

export default Mybookings
