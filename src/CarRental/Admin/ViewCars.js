import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'datatables.net-dt';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ViewCars = () => {
    const [cars, setCars] = useState([])
    const [car, setCar] = useState({ name: '', brand: '', type: '', fuel: '', seats: '', transmission: '', pricePerDay: '', image: '' })

    useEffect(() => {
        axios.get(`http://localhost:5000/cars`)
            .then((res) => setCars(res.data))
            .catch((err) => console.log(err))

        if (cars.length > 0) {
            let table = new DataTable('#myTable');
        }

    }, [cars])

    const deleteCar = (cid) => {
        axios.delete(`http://localhost:5000/cars/${cid}`)
            .then(() => {
                toast.error('Car Details Deleted', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch((err) => console.log(err))
    }
    const getOneCar = (cid) => {
        axios.get(`http://localhost:5000/cars/${cid}`)
            .then((res) => {
                console.log(res.data);

                const data = res.data
                setCar(data)
            })
            .catch((err) => console.log(err))
    }
    const changeCar = (e) => {
        const { name, value } = e.target;

        setCar({ ...car, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/cars/${car.id}`, car)
            .then(() => alert('Car Data Updated Successfully '))
    }
    return (
        <div className=' container p-5'>
            <ToastContainer />
            <table className=' table table-bordered' id='myTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price Per Day</th>
                        <th>Seats</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map((car, index) => {
                            return (
                                <tr key={index}>
                                    <td>{car.name}</td>
                                    <td>₹{car.pricePerDay}/- Only</td>
                                    <td>{car.seats} Seater</td>
                                    <td>
                                        <button onClick={() => getOneCar(car.id)} data-bs-target='#update' data-bs-toggle='modal' className='btn btn-primary me-3'><i className='bi bi-pencil' /></button>
                                        <button onClick={() => deleteCar(car.id)} className='btn btn-danger'><i className='bi bi-trash' /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='modal fade' id='update'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5>Update Car Details</h5>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={submitHandler}>
                                <input name='name' value={car.name} onChange={changeCar} placeholder='Name of the Car ' className='form-control mb-3' />
                                <input name='brand' value={car.brand} onChange={changeCar} placeholder='Brand Name' className='form-control mb-3' />
                                <input name='type' value={car.type} onChange={changeCar} placeholder='Car Model Type' className='form-control mb-3' />
                                <input name='fuel' value={car.fuel} onChange={changeCar} placeholder='Fuel Type' className='form-control mb-3' />
                                <input name='seats' value={car.seats} onChange={changeCar} placeholder='How Many Passengers Can Travel' className='form-control mb-3' />
                                <input name='transmission' value={car.transmission} onChange={changeCar} placeholder='Gear Transmission' className='form-control mb-3' />
                                <input name='pricePerDay' value={car.pricePerDay} onChange={changeCar} placeholder='Price Per Day' className='form-control mb-3' />
                                <input name='image' value={car.image} onChange={changeCar} placeholder='Car Image Path' className='form-control mb-3' />
                                <input type='submit' data-bs-dismiss='modal' className='form-control mb-3' />
                            </form>
                        </div>
                        <div className='modal-footer'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCars