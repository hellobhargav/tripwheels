import React from 'react'

const ChooseUs = () => {
    return (
        <section className="py-5 bg-light" id="why-choose-us">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Choose <span className="text-primary">TripWheels</span>?</h2>
                    <p className="text-muted">We make your journey smooth, comfortable, and worry-free.</p>
                </div>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="text-center p-4 border rounded-4 h-100 bg-white shadow-sm">
                            <i className="bi bi-car-front-fill fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Wide Range of Vehicles</h5>
                            <p className="text-muted">Choose from hatchbacks, sedans, SUVs, and luxury cars suited for any trip.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center p-4 border rounded-4 h-100 bg-white shadow-sm">
                            <i className="bi bi-cash-stack fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Affordable Pricing</h5>
                            <p className="text-muted">Transparent pricing with no hidden fees — only pay for what you need.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center p-4 border rounded-4 h-100 bg-white shadow-sm">
                            <i className="bi bi-lightning-charge-fill fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Easy & Fast Booking</h5>
                            <p className="text-muted">Book your car in minutes with our smooth and simple online process.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center p-4 border rounded-4 h-100 bg-white shadow-sm">
                            <i className="bi bi-tools fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Well-Maintained Fleet</h5>
                            <p className="text-muted">All vehicles are serviced regularly for maximum safety and comfort.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center p-4 border rounded-4 h-100 bg-white shadow-sm">
                            <i className="bi bi-headset fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">24/7 Support</h5>
                            <p className="text-muted">Round-the-clock assistance for bookings, roadside help, and queries.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center p-4 border rounded-4 h-100 bg-white shadow-sm">
                            <i className="bi bi-shield-check fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Secure & Trusted</h5>
                            <p className="text-muted">Thousands of happy customers trust TripWheels for safe rentals.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default ChooseUs