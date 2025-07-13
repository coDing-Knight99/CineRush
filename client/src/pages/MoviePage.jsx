
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { useEffect, useState } from 'react';
import BlurCircle from '../components/BlurCircle';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import timeformat from '../lib/timeformate';

const MoviePage = () => {
  const {id}=useParams();
  const [show, setshow] = useState(null);
  const getShow = async ()=>{
    const show=await dummyShowsData.find(show=> show._id==id)
    setshow({
      movie:show,
      dateTime: dummyDateTimeData
    })
  }
  
  useEffect(() => {
    getShow()
  }, [id])
  
  return show?(
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto pb-30'>
        <img src={show.movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'/>
        <div className='relative flex flex-col gap-3'>  
          <BlurCircle top="-100px" left="-500px"/>
          <p className='text-primary'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary'/>
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>
          <p>
            {timeformat(show.movie.runtime)} &nbsp; | &nbsp; {show.movie.genres.map(genre=>genre.name).join(", ")} &nbsp; | &nbsp; {show.movie.release_date.split("-")[0]}
          </p>
          <div className='flex items-center gap-4 mt-4'>
            <button className='flex items-center gap-2 px-10 py-3 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-sm text-white active:scale-95'>
              <PlayCircleIcon className='w-5 h-5'/> 
              Watch Trailer
              </button>
            <a href="#dateselect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'>Buy Tickets</a>
            <button className='flex items-center gap-2 px-2 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-full font-medium text-sm text-white active:scale-95'>
              <Heart className={`w-7 h-7 active:scale-95`}/>
            </button>
          </div>
        </div>
      </div>
      
      <p>Your Favorite Cast</p>
      <div className='overflow-x-auto mt-8 pb-4 no-scrollbar'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,12).map((cast, index) => (
            <div key={index} className='flex flex-col items-center gap-2'>
              <img src={cast.profile_path} alt="" className='w-20 h-20 rounded-full aspect-square object-cover'/>
              <p className='text-sm text-center'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex bg-primary backdrop-blur-lg items-center justify-between px-6 py-4 rounded-lg mt-8' id='dateselect'>
        <p>Choose Date</p>

      </div>
    </div>
  ):(
    <div>Loading...</div>
  )
}

export default MoviePage
