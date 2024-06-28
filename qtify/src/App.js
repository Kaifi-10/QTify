import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbum, fetchNewAlbum, fetchSongs } from "./api/api";
import { useState, useEffect } from "react";
// import Section from "./components/Section/Section";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import Filters from "./components/Filters/Filters";
import { fetchGenre } from "./api/api";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([])

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbum();
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewAlbums = async () => {
    try {
      const data = await fetchNewAlbum();
      setNewAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateSongs = async () =>{
    try {
      const data = await fetchSongs()
      setSongsData(data)
    } catch (e) {
      console.error(e);
      
    }
  }

  

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateSongs()
    // console.log("topAlbums:", topAlbumsData);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} title="Top Albums" type="album" />
        <Section data={newAlbumsData} title="New Albums" type="album" />
        <Section data={songsData} title="Songs" type="songs" filterSource={fetchGenre}/>
        <Filters />
      </div>
    </div>
  );
}

export default App;
