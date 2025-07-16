import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { useFavorite } from '../../FavoriteContext';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { useEffect, useState } from 'react';
import BlurCircle from '../components/BlurCircle';
import { ArrowRight, Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import timeformat from '../lib/timeformate';
import DateSeleect from '../components/DateSeleect';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
const MoviePage = () => {
  const {id}=useParams();
  const navigate = useNavigate();
  const { shows, toggleFavorite } = useFavorite();
  // const getShow = async ()=>{
  //   setshow(null);
  //   const show=await shows.find(show=> show._id==id)
  //   if(show){
  //   setTimeout(()=>{setshow({
  //     movie:show,
  //     dateTime: dummyDateTimeData
  //   })},2000);
  //   }
  // }
  const movie= shows.find(show=> show._id==id);
  const handleFavorite = (id) => {
    toggleFavorite(id);
  }

  // useEffect(() => {
  //   getShow()
  // }, [id])
  
  return movie?(
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto pb-30'>
        <img src={movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'/>
        <div className='relative flex flex-col gap-3'>  
          <BlurCircle top="-100px" left="-500px"/>
          <p className='text-primary'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{movie.title}</h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary'/>
            {movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{movie.overview}</p>
          <p>
            {timeformat(movie.runtime)} &nbsp; | &nbsp; {movie.genres.map(genre=>genre.name).join(", ")} &nbsp; | &nbsp; {movie.release_date.split("-")[0]}
          </p>
          <div className='flex items-center gap-4 mt-4'>
            <button className='flex items-center gap-2 px-10 py-3 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-sm text-white active:scale-95'>
              <PlayCircleIcon className='w-5 h-5'/> 
              Watch Trailer
              </button>
            <a href="#dateselect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'>Buy Tickets</a>
            <button onClick={()=>{
              handleFavorite(movie._id);
            }} className='flex items-center cursor-pointer gap-2 px-2 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-full font-medium text-sm text-white active:scale-95'>
              <Heart className={`w-7 h-7 active:scale-95 ${movie.isFavorite?'fill-pink-500':'hover:text-3xl'}`}/>
            </button>
          </div>
        </div>
      </div>
      
      <p>Your Favorite Cast</p>
      <div className='overflow-x-auto mt-8 pb-4 no-scrollbar'>
        <div className='flex items-center gap-4 w-max px-4'>
          {movie.casts.map((cast, index) => (
            <div key={index} className='flex flex-col items-center gap-2'>
              <img src={cast.profile_path} alt="" className='w-20 h-20 rounded-full aspect-square object-cover'/>
              <p className='text-xs text-center'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
      <DateSeleect dateTime={dummyDateTimeData} id={id}/>

      <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {shows.filter(show=>show._id!=movie._id).slice(0,4).map((movie,index)=>(
          <MovieCard onClick={()=>{
            navigate(`/movies/${movie._id}`);scrollTo(0,0);
          }} key={index} movie={movie}/>  
        ))
        }
      </div>
      <div className='group flex justify-center mt-20'>
        <button onClick={()=>{
          navigate('/movies');scrollTo(0,0);
        }} className='flex gap-2 px-10 py-3 text-md bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'>Show More <ArrowRight className='text-xs group-hover:translate-x-0.5 transition'/></button>
      </div>
    </div>
  ):(
    <div><Loading/></div>
  )
}

export default MoviePage
