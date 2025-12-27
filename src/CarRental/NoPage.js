import React from 'react'
import errorImg from './assets/errorimg.gif'
import { Link } from 'react-router'

const NoPage = () => {
    return (
        <div className=' container p-5 text-center'>
            <Link to={`/`}>
                <img src={errorImg} alt='Main Error' className='w-50' />
            </Link>
        </div>
    )
}

export default NoPage