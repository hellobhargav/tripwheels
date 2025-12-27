import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {
    const services = useCallApi('services')
    const cars = useCallApi('cars')
    const bookings = useCallApi('bookings')
    return (
        <div className='welcome container p-5'>
            <h2>Welcome to Admin Dashboard</h2>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>{cars.length}+</h1>
                            <h5>Cars</h5>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>{services.length}+</h1>
                            <h5>Services</h5>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1>{bookings.length}+</h1>
                            <h5>Bookings</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome