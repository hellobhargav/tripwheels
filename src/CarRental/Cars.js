import React, { useEffect, useState } from 'react'
import OneCar from './OneCar'
import axios from 'axios'

const Cars = () => {
    const [cars, setCars] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/cars`)
            .then((res) => {
                setLoading(false)
                setCars(res.data)
            })
            .catch((err) => {
                setLoading(false)
                setError(err.message)
            })
    }, [cars])

    return (
        <section class="py-5" id="cars">
            <div class="container">

                <div class="text-center mb-5">
                    <h2 class="fw-bold">Our <span class="text-primary">Cars</span></h2>
                    <p class="text-muted">Choose from our wide range of well-maintained rental cars.</p>
                </div>
                {loading && <p className='text-center text-primary fs-6'><span className='spinner spinner-border'></span></p>}
                {error && <p className='text-danger text-center'>{error}</p>}
                <div class="row g-4">
                    {
                        cars.map((car) => {
                            return (
                                <div className='col-md-4'>
                                    <OneCar car={car} />
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </section>
    )
}

export default Cars