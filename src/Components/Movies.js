import React from 'react'
import MovieEx from './MovieEx'

const Movies = () => {
    const data = [
        {
            title: 'Shiva',
            lang: 'Telugu',
            censor: 'A',
            path: 'https://cdn.district.in/movies-assets/images/cinema/Shiva_Poster-c9ff5cb0-bf9a-11f0-81d4-51be6cdc4380.jpg'
        },
        {
            title: 'Badlands',
            lang: 'English',
            censor: 'A',
            path: 'https://cdn.district.in/movies-assets/images/cinema/Poster%20Predator--Badlands-f423ad40-21c8-11f0-a22b-459bceb33eba.jpg'
        },
        {
            title: "Demon Slayer",
            path: 'https://cdn.district.in/movies-assets/images/cinema/Demon-Slayer--Kimetsu-no-Yaiba-Infinity-Castle-cover-57c0fbd0-9aa2-11f0-8dc6-ed40ef18c005.jpg',
            censor: 'U/A',
            lang:'Japaneesh'
        }

    ]
    return (
        <div className='movies'>
            <h2>Latest Movies</h2>
            {
                data.map((movie , index) => {
                    return <MovieEx key={index} movie={movie} />
                })
            }
        </div>
    )
}

export default Movies