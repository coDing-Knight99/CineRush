import { React,useState,useContext } from "react"
import MovieCard from "../components/MovieCard" 
import { dummyShowsData } from "../assets/assets";
import { useFavorite } from "../../FavoriteContext";
const Favourite = () => {
const { shows } = useFavorite();
  return (shows.some(show=>show.isFavorite==true)?(
    <div className='flex flex-col min-h-screen mt-40 gap-5 flex-wrap mr-md:15 w-full'>
      <p className="md:mx-15 mx-5">Your Favorite Movies</p>
      <div className="flex flex-wrap gap-5 max-md:justify-center md:mx-15 mx-5">
        {
          shows.filter(show=> show.isFavorite==true).map((show,index)=>(
            <MovieCard key={index} movie={show}/>
          ))
        }
      </div>
            
    </div>
  ):
  <h1 className="text-center text-lg text-primary mt-30 min-h-screen">No Favorite Movie Added Yet</h1>
)
}

export default Favourite
