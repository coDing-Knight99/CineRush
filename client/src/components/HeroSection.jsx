import React from 'react'
import { assets } from '../../public/assets/assets'
import { CalendarIcon, ClockIcon } from 'lucide-react'

const HeroSection = () => {
  return (<>
    <div className='flex flex-col justify-centergap-4 px-6 md:px-16 lg:px-36 bg-[url("./assets/jurrasic.png")] bg-cover bg-center h-screen'>
        {/* <img src={assets.logoj} alt="" />
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Jurassic World <br />Rebirth</h1> */}
        <div className='flex items-center gap-4 text-gray-300'>
          <span>Action | Adventure | Sci-Fi</span>
          <div className='flex item-center gap-1'>
            <CalendarIcon className='w-4.5 h-4.5'/> 2025
          </div>
          <div className='flex items-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/>2h 14m
          </div>
        </div>

    </div>
    <div className='flex flex-col justify-centergap-4 px-6 md:px-16 lg:px-36 bg-[url("./assets/jurrasic.png")] bg-cover bg-center h-screen'></div>
    </>
  )
}

export default HeroSection
