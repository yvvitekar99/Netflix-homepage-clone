import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState([]);
  useEffect(() => {
    setTrailerUrl("");
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals); //[] {m1,m2,m3}
      const movieArray = request.data.results;
      setMovie(
        movieArray[Math.floor(Math.random() * request.data.results.length)]
      );
      return request;

      /*console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length )
        ]
      ); */
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="banner_header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div>
          <button className="banner_button">
            Play
          </button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
