import {API_KEY} from "../services/settings"

import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Home from "../Home";

function movieDetails() {

  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}${API_KEY}`);
        const data = await response.json();
        if (data.Response === 'True') {
          setMovieData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovieData();
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-8">
      <Home />
      {movieData && (
            <div className='flex flex-col items-center gap-4'>
                <img className="rounded-lg" src={movieData && movieData.Poster} alt={movieData && movieData.Title} />
                <h2 className="text-xl font-bold text-teal-600">{movieData && movieData.Title}</h2>
                <p>{movieData && movieData.Plot}</p>    
            </div>
        )}

    </div>
  );
}
export default movieDetails;

/* 



*/