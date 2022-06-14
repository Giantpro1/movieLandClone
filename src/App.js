import {useEffect}  from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './Search.svg';

  const API_URL = 'http://www.omdbapi.com?apikey=fd497cb4';

    const movie1 = {
      "Title": "Amazing Spiderman Syndrome",
      "Year": "2012",
      "imdbID": "tt2586634",
      "Type": "movie",
      "Poster": "N/A"
  }

const App = () =>{
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
  useEffect(() =>{
    searchMovies('spiderman');
  }, []);

  return(
  <div className='app'>
    <h1>MovieLand</h1>

    <div className="search">
    <input 
    placeholder='Search for movies'
  value="SuperMan"
  onChange={() =>{}}  
    />
    <img
    src={SearchIcon}
    alt="search"
    onClick={()=>{}}
    />
    </div>
    <div className="container">
   <MovieCard movie1={movie1}/>
    </div>
  </div>
  )
}


export default App;
