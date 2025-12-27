import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
    return (
        <section className="py-5" id="contact">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">Contact <span className="text-primary">Us</span></h2>
                    <p className="text-muted">We’re here to help you with bookings, queries, and support.</p>
                </div>

                <div className="row g-4">

                    <div className="col-lg-4">
                        <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-geo-alt-fill fs-3 text-primary me-3"></i>
                                <h5 className="fw-semibold mb-0">Our Location</h5>
                            </div>
                            <p className="text-muted mb-0">TripWheels Car Rental,<br /> Hyderabad, Telangana, India</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-telephone-fill fs-3 text-primary me-3"></i>
                                <h5 className="fw-semibold mb-0">Call Us</h5>
                            </div>
                            <p className="text-muted mb-1">+91 98765 43210</p>
                            <p className="text-muted mb-0">+91 91234 56789</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-envelope-fill fs-3 text-primary me-3"></i>
                                <h5 className="fw-semibold mb-0">Email</h5>
                            </div>
                            <p className="text-muted mb-0">support@tripwheels.com</p>
                            <p className="text-muted mb-0">info@tripwheels.com</p>
                        </div>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto">
                        <div className="p-4 shadow-sm rounded-4 bg-white">
                            <h4 className="fw-bold mb-4">Send Us a Message</h4>
                            <SendEnquiry />

                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className="rounded-4 overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.41359421659!2d78.366!3d17.443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932ddac8dffb%3A0x2c6b7e9d271b1e1c!2sHyderabad!"
                                width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Contact