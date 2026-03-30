import React from "react";

import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
    return (
        <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target='_blank'
            className='movie_card'>
            <img src={movie.poster} 
            alt={movie.title} 
            className='movie_poster'
            />

            <div className='movie_details'>
                <h3 className='movie_details_heading'>
                    {(movie.original_title || "No Title").slice(0, 20)}
                </h3>
                <div className='align_center movie_date_rate'>
                    <p>{movie.release_date || "N/A"}</p>
                    <p className='align_center'>
                        {movie.vote_average || "0"}
                        <img
                            src={Star}
                            alt='rating icon'
                            className='card_emoji'
                        />
                    </p>
                </div>
                <p className='movie_description'>
                    {movie.overview.slice(0, 40)}
                </p>
            </div>
        </a>
    );
};

export default MovieCard;
