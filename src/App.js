import { useState,useEffect } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore";

function App() {
  const [movieList, setMovielist] = useState([]);
  const moviesCollectionRef = collection(db, "movie");
  useEffect(() =>{
    const getMovieList = async () =>{
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovielist(filteredData);
      } catch (error) {
        console.error("Error fetching movie list: ", error);        
      }   
    };
    getMovieList();
  },[])

  return (
    <div className="App">
      <Auth/>
      <div>
        {movieList.map((movie) => {
          return (
            <div>
              <div>
                <h1 style={{color: movie.oscar ? "green" : "red"}}>{movie.title}</h1>
                <p>{movie.releaseDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;