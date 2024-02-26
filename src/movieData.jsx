// https://65c46a25dae2304e92e28e61.mockapi.io/api/v1/movieData

import React, { useState, useEffect } from 'react';

const MovieData = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://65c46a25dae2304e92e28e61.mockapi.io/api/v1/movieData');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMovies(data);

            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return movies;
};

export default MovieData;
