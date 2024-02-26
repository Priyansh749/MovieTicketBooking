import React from 'react';
import { Link } from 'react-router-dom';
import redstar from './assets/redstar.png';

const MovieCard = ({ imageUrl, movieName, rating, votes }) => {
    return (
        <div className="movie-card">
            <div className="col-md-2 mb-4">
                <div className="card">
                    <Link to="/Book">
                        <img src={imageUrl} className="card-img-top" alt={movieName} />
                    </Link>
                    <div className="rating-bar">
                        <img src={redstar} className='redstar' />
                        <pre>{rating}</pre>
                        <pre style={{ marginLeft: "30px" }} >{votes}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
