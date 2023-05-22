


import React, { useEffect, useState } from 'react'
import "./Home.css"

// install npm react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from 'react-router-dom';

// import material ui icons
import StarIcon from '@mui/icons-material/Star';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        async function popMovies() {

            // fetch data for responsive carousel using popular api key

            const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")

            const data = await res.json()
            setPopularMovies(data.results)
            console.log(data.results)
        }
        popMovies();
    }, [])

    return (
        <div className='poster'>
            <Carousel showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false} >

                {
                    popularMovies.map((movie,index) => {
                        return (
                            <div>
                                <Link style={{ color: "white", textDecoration: "none" }} to={`/movie/${movie.id}`}>
                                    <div className="posterImage">
                                        {/* use TMDB Image Path */}
                                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                    </div>

                                    <div className="posterImage__overlay">
                                        <div className="posterImage__title">
                                            {movie ? movie.original_title : ""}
                                        </div>

                                        <div className="posterImage__runtime">
                                            {movie ? movie.release_date : ""}

                                            <span className="posterImage__rating">
                                                {movie ? movie.vote_average : ""}
                                               <StarIcon style={{fontSize:"25px"}}/>
                                            </span>
                                        </div>

                                        <div className="posterImage__description">
                                            {movie ? movie.overview : ""}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </Carousel>
           
        </div>
    )
}

export default Home
