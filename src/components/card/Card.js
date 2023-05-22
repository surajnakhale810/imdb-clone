


// install & import react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import React, { useEffect, useState } from 'react'
import"./Card.css"
import { Link } from 'react-router-dom';

// import material ui icons
import StarIcon from '@mui/icons-material/Star';

const Card = ({movie}) => {

const[isLoading, setIsLoading] = useState(true)
useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
},[])

  return (
    <div>
      {
        isLoading ?
        <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2} />
        </SkeletonTheme>
        </div> 
        :
        <Link style={{ color: "white", textDecoration: "none" }} to={`/movie/${movie.id}`}>
        <div className="cards">
            {/* use TMDB Image Path */}
            <img className='cards__img' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
        

        <div className="cards__overlay">
            <div className="cards__title">
                {movie ? movie.original_title : ""}
            </div>

            <div className="cards__runtime">
                {movie ? movie.release_date : ""}

                <span className="cards__rating">
                    {movie ? movie.vote_average : ""}
                   <StarIcon  style={{fontSize:"15px"}}/>
                </span>
            </div>

            <div className="cards__description">
                {movie ? movie.overview.slice(0,118)+ "..." : ""}
            </div>
            </div>
        </div>
    </Link>
        
      }
    </div>
  )
}

export default Card
