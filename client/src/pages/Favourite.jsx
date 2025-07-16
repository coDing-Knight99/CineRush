import { React,useState,useContext } from "react"
import MovieCard from "../components/MovieCard" 
import { dummyShowsData } from "../assets/assets";
import { useFavorite } from "../../FavoriteContext";
import BlurCircle from "../components/BlurCircle";
const Favourite = () => {
const { shows } = useFavorite();
  return (shows.some(show=>show.isFavorite==true)?(
    
    <div className='flex flex-col min-h-screen mt-40 gap-5 flex-wrap mr-md:15 w-full'>
      <BlurCircle top="100px" left="300px"/>
    <BlurCircle top="600px" right="400px"/>
      <p className="md:mx-15 mx-5 font-semibold">Your Favorite Movies</p>
      <div className="flex flex-wrap gap-5 max-md:justify-center md:mx-15 mx-5">
        {
          shows.filter(show=> show.isFavorite==true).map((show,index)=>(
            <MovieCard key={index} movie={show}/>
          ))
        }
      </div>
            
    </div>
  ):
  <div> 
    <BlurCircle top="100px" left="300px"/>
    <BlurCircle top="600px" right="400px"/>
    <h1 className="text-center animate-pulse text-lg text-primary mt-30 min-h-screen">No Favorite Movie Added Yet</h1>
  </div>
 
)
}

export default Favourite
