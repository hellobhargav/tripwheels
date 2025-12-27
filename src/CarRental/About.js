import React from 'react'
import ChooseUs from './ChooseUs'

const About = () => {
    return (
        <section className="py-5" id="about">
            <div className="container">
                <div className="row align-items-center g-4">

                    <div className="col-lg-6">
                        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200"
                            className="img-fluid rounded-4 shadow"
                            alt="TripWheels Car Rental" />
                    </div>

                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">About <span className="text-primary">TripWheels</span></h2>
                        <p className="text-muted">
                            TripWheels is your trusted partner for seamless and affordable car rentals.
                            Whether you're planning a weekend getaway, a business trip, or a long drive,
                            we offer a wide range of well-maintained vehicles designed to suit your journey.
                        </p>

                        <p className="text-muted">
                            With a commitment to quality, transparency, and customer satisfaction,
                            TripWheels ensures a smooth rental experience with easy booking, 24/7 support,
                            and secure service. Our goal is to make your travel hassle-free and enjoyable.
                        </p>

                        <ul className="list-unstyled mt-4">
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Wide range of cars for every need</li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Affordable, transparent pricing</li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Easy online booking & instant confirmation</li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> 24/7 customer support & assistance</li>
                        </ul>
                    </div>

                </div>
            </div>
            <ChooseUs />
        </section>

    )
}

export default About