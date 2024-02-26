import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MovieCard from './Moviecard';
import MovieData from './movieData';
import Footer from './footer'
import SearchTerm from './searchBar';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const movies = MovieData();

    const filteredMovies = Array.isArray(movies) ? movies.filter(movie => movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    return (
        <div className='body'>
            <Navbar />
            <SearchTerm setSearchTerm={setSearchTerm} />
            <div className="container">
                <marquee behavior="scroll" direction="left">
                    <span style={{ color: '#ff4500', fontWeight: 'bold' }}>Welcome to our Movie Ticket Booking!</span> Get ready for an amazing cinematic experience. Book your tickets now and immerse yourself in the world of movies.
                </marquee>


                <div className="row">
                    {filteredMovies.map(movie => (
                        <MovieCard
                            key={movie.movieName}
                            imageUrl={movie.imageUrl}
                            movieName={movie.movieName}
                            rating={movie.rating}
                            votes={movie.votes}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div >

    );
}

export default Home;
