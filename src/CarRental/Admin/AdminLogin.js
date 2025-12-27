import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { loginStatus } from '../../App'

const AdminLogin = () => {
    const [details, setDetails] = useState({ email: '', password: '' })
    const [Users, setUsers] = useState([])
    const [login, setLogin] = useContext(loginStatus)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5000/users`)
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const changeDetails = (e) => {
        const { name, value } = e.target

        setDetails({ ...details, [name]: value })

    }

    const submitHandler = (e) => {
        e.preventDefault()

        console.log(details);

        const exist = Users.find((user) => {
            return user.email === details.email && user.password === details.password
        })



        if (exist) {
            console.log(exist);

            setLogin(true)
            navigate('/dashboard')
        } else {
            alert('Invalid Credentials')
        }

    }
    return (
        <div className=' container p-5'>
            <div className='col-lg-6 shadow p-5 mx-auto'>
                <h2 className='mb-3 text-center'>Admin Dashboard</h2>
                <form onSubmit={submitHandler}>
                    <input type='email' name='email' onChange={changeDetails} placeholder='Email Address' className=' form-control mb-3' />
                    <input type='password' name='password' onChange={changeDetails} placeholder='Password' className=' form-control mb-3' />
                    <input type='submit' className=' form-control mb-3' />
                </form>
            </div>
        </div>
    )
}

export default AdminLogin