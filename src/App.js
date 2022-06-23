import React from "react";
import "./App.css";
import Row from "./Row.js";
import requestes from "./requests.js";
import Banner from "./Banner.js";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Banner fetchUrl={requestes.fetchNetflixOriginals} />
      <Row
        title="Netflix Originals"
        fetchUrl={requestes.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requestes.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requestes.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requestes.fetchHorroMovies} />
      <Row title="Comedy Movies" fetchUrl={requestes.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requestes.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requestes.fetchDocumentaries} />
    </div>
  );
}

export default App;
