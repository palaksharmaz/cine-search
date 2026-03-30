import React, { useState } from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";


const Navbar = ({ setSearchQuery }) => {


    return (
        <nav className='navbar'>
            <h1>CineSearch</h1>

            <div className="search_container">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="search_input"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className='navbar_links'>
                <DarkMode />
                <a href='#popular'>
                    Popular{" "}
                    <img src={Fire} alt='fire emoji' className='navbar_emoji' />
                </a>
                <a href='#top_rated'>
                    Top Rated{" "}
                    <img src={Star} alt='star emoji' className='navbar_emoji' />
                </a>
                <a href='#upcoming'>
                    Upcoming{" "}
                    <img
                        src={Party}
                        alt='party face emoji'
                        className='navbar_emoji'
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
