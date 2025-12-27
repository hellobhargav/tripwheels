import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import { loginStatus } from '../../App'
const Dashboard = () => {
    const [login, setLogin] = useContext(loginStatus)
    const navigate = useNavigate()
    useEffect(() => {
        if (!login) {
            navigate('/admin')
        }
    }, [login])
    return (
        <section className=' container-fluid'>
            <div className='row'>
                <aside className='col-lg-3'>
                    <Link to={''}>
                        <h2 className='btn'>Admin Dashboard</h2>
                    </Link>
                    <Link to={'addCar'}>
                        <button>Add Car</button>
                    </Link>
                    <Link to={'viewCars'}>
                        <button>View Cars</button>
                    </Link>
                    <Link to={'viewBookings'}>
                        <button>View Bookings</button>
                    </Link>
                    <Link to={'viewReviews'}>
                        <button>View Reviews</button>
                    </Link>
                    <Link to={'addService'}>
                        <button>Add Service</button>
                    </Link>
                    <Link to={'viewServices'}>
                        <button>View Services</button>
                    </Link>
                    <button onClick={() => setLogin(false)}>Logout</button>
                </aside>
                <div className='col-lg-9'>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Dashboard