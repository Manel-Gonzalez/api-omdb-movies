import { useState } from "react"
import { API_URL,API_KEY,API_SEARCH } from "../services/settings"
import { useNavigate } from "react-router-dom"
import {ClipLoader} from "react-spinners"
import MovieDetails from "./movieDetails"

function SearchBar() {
    const[ movie, setMovie]=useState(true)
    const[ loading, setLoading]=useState(false)
    const[ movieData, setMovieData]=useState(null)
    const navigate = useNavigate();

const handleSumbit = async (e) => { 
    e.preventDefault()
    const title = e.target.title.value;
    if (title === '') {
        alert('Debes ingresar una pelicula')
        return
    }

    setLoading(true);


    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}${API_KEY}`);
        const data = await response.json();
        if (data.Response === "True") {        
            setMovie(true);
            setMovieData(data);
            navigate(`/movie/${data.imdbID}`);
        } else {
            
            setMovie(false);
            setMovieData(null);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        setMovie(false);
        setMovieData(null);
    }finally {
      setLoading(false);
    }
}


return (
    <>


        <form onSubmit={handleSumbit} className='w-full max-w-sm'>
            <div className="flex items-center border-b border-teal-500 justify-between m-1">
                <input className="p-2 outline-none " type='text' name='title' placeholder='Buscar pelicula' />
                <button className="p-3  border-teal-500 bg-teal-500 rounded-t-lg hover:bg-teal-700 hover:text-white">Buscar</button>
            </div>
                {!movie && <p className="text-red-600">La pelicula no existe</p>}
        </form>
        {loading && <ClipLoader color="#36d7b7" />}
  
 </>
)
}
export default SearchBar