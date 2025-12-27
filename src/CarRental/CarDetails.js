import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/cars/${id}`)
            .then((res) => setCar(res.data))
            .catch((err) => console.log(err))
    })
    return (
        <section class="py-5">
            <div class="container">

                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/cars">Cars</a></li>
                        <li class="breadcrumb-item active">{car.name}</li>
                    </ol>
                </nav>

                <div class="row g-4">

                    <div class="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1493238792000-8113da705763"
                            class="img-fluid rounded-4 shadow"
                            alt="Car Image"
                        />
                    </div>

                    <div class="col-lg-6">
                        <h2 class="fw-bold">{car.name}</h2>
                        <p class="text-muted">{car.type} • {car.fuel} • {car.transmission}</p>

                        <h4 class="text-primary fw-bold mb-3">₹{car.pricePerDay} / day</h4>

                        <div class="row g-3 mb-4">
                            <div class="col-6">
                                <i class="bi bi-fuel-pump-fill text-primary me-2"></i> {car.fuel}
                            </div>
                            <div class="col-6">
                                <i class="bi bi-gear-fill text-primary me-2"></i> {car.transmission}
                            </div>
                            <div class="col-6">
                                <i class="bi bi-people-fill text-primary me-2"></i> {car.seats} Seats
                            </div>
                            <div class="col-6">
                                <i class="bi bi-car-front-fill text-primary me-2"></i> {car.type}
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 rounded-4 p-4">
                            <h5 class="fw-semibold mb-3">Book This Car</h5>

                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="date" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <input type="date" class="form-control" />
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 btn-lg">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-5">
                    <h4 class="fw-bold mb-3">Car Description</h4>
                    <p class="text-muted">
                        The Hyundai Verna offers a smooth driving experience with premium comfort,
                        perfect for city rides and long journeys. Enjoy modern features, great mileage,
                        and a stylish interior.
                    </p>
                </div>

                <div class="mt-5">
                    <h4 class="fw-bold mb-3">Customer Reviews</h4>

                    <div class="card border-0 shadow-sm p-3 mb-3">
                        <h6 class="fw-semibold mb-1">Sandeep R</h6>
                        <p class="mb-1 text-warning">★★★★★</p>
                        <p class="text-muted mb-0">Very comfortable and clean car.</p>
                    </div>

                    <div class="card border-0 shadow-sm p-3">
                        <h6 class="fw-semibold mb-1">Priya Sharma</h6>
                        <p class="mb-1 text-warning">★★★★☆</p>
                        <p class="text-muted mb-0">Smooth ride and easy booking.</p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default CarDetails