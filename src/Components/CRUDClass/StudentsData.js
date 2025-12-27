import axios from 'axios';
import React, { Component } from 'react'

export default class StudentsData extends Component {
    constructor() {
        super();

        this.state = {
            students: [],
            id: '',
            name: '',
            course: '',
            status: ''
        }
    }
    componentDidMount() {
        this.fetchStudents()
    }
    fetchStudents = () => {
        axios.get(`http://localhost:5000/students`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    students: res.data
                })

            })
            .catch((err) => console.log(err))
    }
    deleteStudent = (sid) => {
        axios.delete(`http://localhost:5000/students/${sid}`)
            .then(() => {
                alert('Student Deleted Successfully');
                this.fetchStudents()
            })
            .catch((err) => console.log(err))
    }
    getOneRecord = (sid) => {
        axios.get(`http://localhost:5000/students/${sid}`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    course: res.data.course,
                    status: res.data.status
                })

            })
    }
    changeStudent = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // console.log(this.state);

        const { id, name, course, status } = this.state;

        axios.put(`http://localhost:5000/students/${id}`, { id, name, course, status })
            .then(() => {
                alert('Student Data Updated Successfully..')
                this.fetchStudents()
            })
            .catch((err) => console.log(err))

    }
    render() {
        const { name, course, status } = this.state
        return (
            <div className=' container p-5'>
                <h2>Students : {this.state.students.length}</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.course}</td>
                                        <td>{student.status}</td>
                                        <td>
                                            <button onClick={() => this.getOneRecord(student.id)} data-bs-target="#update" data-bs-toggle="modal" className='btn btn-primary me-3'>Edit</button>
                                            <button onClick={() => this.deleteStudent(student.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='modal fade' data-bs-backdrop="static" id='update'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5>Update Student</h5>
                                <button className='btn-close' data-bs-dismiss="modal"></button>
                            </div>
                            <div className='modal-body'>
                                <form onSubmit={this.submitHandler}>
                                    <input name='name' value={name} onChange={this.changeStudent} className=' form-control mb-3' />
                                    <input name='course' value={course} onChange={this.changeStudent} className=' form-control mb-3' />
                                    <input name='status' value={status} onChange={this.changeStudent} className=' form-control mb-3' />
                                    <input data-bs-dismiss="modal" type="submit" className=' form-control mb-3' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
