import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

const Movies = () => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = async () => {
        const response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`);
        setMovies(response.data.Search || []);
    }

    return (
        <div className="container">
            <div className="search-container">
                <h1>Find Movies</h1>
                <input 
                    type="text" 
                    value={title} 
                    onChange={handleChange} 
                    placeholder="Enter movie name" 
                    className="input form-control" 
                />
                <button onClick={handleSubmit} className="btn-search movies-button ">Search</button>
            </div>
            <div className="movies-container">
                {movies.map((item, index) => (
                    <div key={index} className="movie-item">
                        <Link to={`/detail/${item.imdbID}`}>
                            <img src={item.Poster} alt={item.Title} className="movie-poster" />
                        </Link>
                        <h2 className="movie-title">{item.Title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;