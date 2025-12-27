import React from 'react'
import ChooseUs from './ChooseUs'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <>
            <div id="mainSlider" className="carousel slide" data-bs-ride='carousel'>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='banner1'>
                            <h2>Find the Perfect Ride for Every Trip</h2>
                            <p>Enjoy hassle-free bookings, premium cars, and affordable pricing with TripWheels.</p>
                            <Link to={`/contact`}>
                                <button>Book a Car</button>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='banner2'>
                            <h2>Comfortable, Reliable & Budget-Friendly</h2>
                            <p>Choose from our wide fleet of cars designed for every journey and every traveler.</p>
                            <Link to={`/cars`}>
                                <button>Explore Cars</button>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='banner3'>
                            <h2>Book Your Car Anytime, Anywhere</h2>
                            <p>TripWheels brings you a seamless online rental experience with instant confirmations.</p>
                            <Link to={`/contact`}>
                                <button>Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <ChooseUs />
        </>
    )
}

export default Hero