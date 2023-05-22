





import React, { useEffect, useState } from 'react'
import "./Movie__list.css"
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const MovieList = () => {

    const [MovieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    async function getData() {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        const data = await res.json()
        setMovieList(data.results)
    }
    return (
        <div className='movie__list'>
            <h2 className='list__title'>{(type ? type : "popular").toUpperCase()}</h2>

            <div className="list__cards">
                {


                    MovieList.map((movie, index) => {
                        return (
                            <Card key={index} movie={movie} />
                        )

                    })


                }

            </div>
        </div>
    )
}

export default MovieList
