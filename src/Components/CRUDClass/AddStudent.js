import axios from 'axios'
import React, { Component } from 'react'

export default class AddStudent extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            course: '',
            status: ''
        }
    }
    changeStudent = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    submitHandler = (e) => {
        console.log(this.state);
        e.preventDefault()

        axios.post(`http://localhost:5000/students`, this.state)
            .then(() => alert('New Student Added Successfully..'))
            .catch((err) => console.log(err))

    }
    render() {
        return (
            <div className=' container p-5'>
                <div className='col-lg-6 text-center shadow p-5 mx-auto'>
                    <h2 className='mb-4'>Add Student</h2>
                    <form onSubmit={this.submitHandler}>
                        <input type='text' onChange={this.changeStudent} name='name' placeholder='Enter Name' className=' form-control mb-3' />
                        <input type='text' onChange={this.changeStudent} name='course' placeholder='Course Name' className=' form-control mb-3' />
                        <input type='text' onChange={this.changeStudent} name='status' placeholder='Status' className=' form-control mb-3' />
                        <input type='submit' className=' form-control mb-3' />
                    </form>
                </div>
            </div>
        )
    }
}
