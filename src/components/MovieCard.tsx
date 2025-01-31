import './MovieCard.scss'
import Star from './StarRating'
import { Movie } from '../types/movie'

export interface props {
    movie: Movie
}

export default function MovieCard(props: props) {
    const movie = props.movie;
    return (
        <li className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className='movie-infos'>
            <p className='movie-title'>
                {movie.title}
            </p> 
            <Star rating={movie.vote_average}/>
            <div className='hidden-content'>
            
            <p className='descript'>
                {movie.overview}
            </p>
           
            <p>
                {movie.vote_average}
            </p> 
            <div>
                <button className='btn-default'>Ver mais</button>
            </div>
        </div>
    </div>
        </li>
    )
}