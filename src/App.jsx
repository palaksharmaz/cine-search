import React, { useState } from "react";

import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className='app'>
            <Navbar setSearchQuery={setSearchQuery} />

            <MovieList type='popular' title='Popular' emoji={Fire} searchQuery={searchQuery}/>
            <MovieList type='top_rated' title='Top Rated' emoji={Star} searchQuery={searchQuery}/>
            <MovieList type='upcoming' title='Upcoming' emoji={Party} searchQuery={searchQuery}/>
        </div>
    );
};

export default App;
