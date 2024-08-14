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
            <div className='flex flex-col items-center gap-4 border-t-2'>
                <h2 className="text-2xl font-bold text-teal-600 mt-8">{movieData && movieData.Title}</h2>
                <div className="flex flex-col md:flex-row w-full ">
                  <div className="md:w-3/5">
                    <img className="rounded-lg w-full " src={movieData && movieData.Poster} alt={movieData && movieData.Title} />

                  </div>
                  <div className="mt-2 md:2/5 md:mt-0 md:ml-4">
                   <p className="p-10">{movieData && movieData.Plot}</p>    

                  </div>
                </div>
            </div>
        )}

    </div>
  );
}
export default movieDetails;

/* 



*/