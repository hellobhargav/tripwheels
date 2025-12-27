import axios from 'axios';
import React, { useState } from 'react'

const AddCar = () => {
    const [car, setCar] = useState({ name: '', brand: '', type: '', fuel: '', seats: '', transmission: '', pricePerDay: '', image: '' })
    const changeCar = (e) => {
        const { name, value } = e.target;

        setCar({ ...car, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/cars`, car)
            .then((res) => {
                alert('New Car Details Added')
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return (
        <div className=' container p-5'>
            <div className='col-lg-6 shadow p-5 mx-auto'>
                <h2>Add Car</h2>
                <form onSubmit={submitHandler}>
                    <input name='name' onChange={changeCar} placeholder='Name of the Car ' className='form-control mb-3' />
                    <input name='brand' onChange={changeCar} placeholder='Brand Name' className='form-control mb-3' />
                    <input name='type' onChange={changeCar} placeholder='Car Model Type' className='form-control mb-3' />
                    <input name='fuel' onChange={changeCar} placeholder='Fuel Type' className='form-control mb-3' />
                    <input name='seats' onChange={changeCar} placeholder='How Many Passengers Can Travel' className='form-control mb-3' />
                    <input name='transmission' onChange={changeCar} placeholder='Gear Transmission' className='form-control mb-3' />
                    <input name='pricePerDay' onChange={changeCar} placeholder='Price Per Day' className='form-control mb-3' />
                    <input name='image' onChange={changeCar} placeholder='Car Image Path' className='form-control mb-3' />
                    <input type='submit' className='form-control mb-3' />
                </form>
            </div>
        </div>
    )
}

export default AddCar