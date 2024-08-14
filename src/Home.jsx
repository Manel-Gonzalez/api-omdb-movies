import SearchBar from "./components/searchBar";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const homeClick = () => {
      navigate('/') 
    }
    return(

      <div className="flex flex-col items-center gap-4 mt-4">
        <h1 className="text-3xl cursor-pointer" onClick={homeClick} >Welcome to the Movie App</h1>
        <SearchBar />
      </div>

    )
  }
  
export default Home