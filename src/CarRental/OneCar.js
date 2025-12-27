import React from 'react'
import { Link } from 'react-router'

const OneCar = (props) => {
    return (

        <div class="card rounded-4 shadow-sm h-100">
            {/* <img src={props.car.image}
                class="card-img-top rounded-top-4" alt={props.car.name} /> */}
            <div class="card-body">
                <h5 class="card-title fw-bold">{props.car.name}</h5>

                <ul class="list-unstyled small text-muted mb-3">
                    <li><i class="bi bi-fuel-pump-fill me-2"></i> {props.car.fuel}</li>
                    <li><i class="bi bi-people-fill me-2"></i> {props.car.seats} Seater</li>
                    <li><i class="bi bi-gear-fill me-2"></i> {props.car.transmission}</li>
                </ul>

                <div class="d-flex justify-content-between align-items-center">
                    <span class="fw-bold fs-5 text-primary">₹{props.car.pricePerDay} / day</span>
                    <Link to={`/carDetails/${props.car.id}`} className="btn btn-primary px-3">More Details</Link>
                </div>
            </div>
        </div>

    )
}

export default OneCar