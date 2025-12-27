import React from 'react'

const MovieEx = (props) => {
    return (
        <div className='movie'>
            <figure>
                <img src={props.movie.path} />
                <figcaption>
                    <h3>{props.movie.title}</h3>
                    <p><span>{props.movie.censor}</span> || <span>{props.movie.lang}</span></p>
                </figcaption>
            </figure>
        </div>
    )
}

export default MovieEx