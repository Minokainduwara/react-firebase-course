import { useState, useEffect } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [movieList, setMovielist] = useState([]);

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewOscar, setIsNewOscar] = useState(false);

  const moviesCollectionRef = collection(db, "movie");
  const getMovieList = async () => {
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
  useEffect(() => {
    
    getMovieList();
  }, [])

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        oscar: isNewOscar,
      });
      getMovieList();
      // Optionally, you might want to refresh the movie list here
    } catch (error) {
      console.error("Error adding movie: ", error);
    }
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movie", id);
    await deleteDoc(movieDoc);
    getMovieList();
  }

  return (
    <div className="App">
      <Auth />
      <br />
      <div>
        <input
          placeholder="Movie title..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />

        <br />

        <input
          placeholder="Release date..." 
          type="number" 
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />

        <br />

        <label> Received Oscar</label>
        <input 
          type="checkbox" 
          checked={isNewOscar}
          onChange={(e) => setIsNewOscar(e.target.checked)}
        />
        <br />
        <button onClick={onSubmitMovie}>Add Movie</button>
      </div>
      <div>
        {movieList.map((movie) => {
          return (
            <div>
              <div>
                <h1 style={{ color: movie.oscar ? "green" : "red" }}>{movie.title}</h1>
                <p>{movie.releaseDate}</p>
                <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;