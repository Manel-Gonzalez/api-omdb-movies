import SearchBar from "./components/searchBar";
function Home() {
    return(

      <div className="flex flex-col items-center gap-4 mt-4">
        <h1 className="text-3xl">Welcome to the Movie App</h1>
        <SearchBar />
        
      </div>
    )
  }
  
export default Home