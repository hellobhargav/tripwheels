import React, { Component } from 'react'

export default class SendEnquiry extends Component {
    constructor() {
        super();

        //Initializing State

        this.state = {
            name: '',
            email: '',
            mobile: '',
            service: '',
            message: ''
        }
    }
    changeEnquiry = (e) => {
        console.log(e.target.name, e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        const nameError = document.getElementById('nameError')
        const mobileError = document.getElementById('mobileError')
        const emailError = document.getElementById('emailError')

        const { name, email, mobile, service, message } = this.state

        const nameExp = /^[a-zA-Z\s]+$/
        const numExp = /^[6-9][0-9]{9}$/;
        const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //Name Validation
        if (name === '') {
            nameError.textContent = `Name is Mandatory`
        } else {
            if (name.match(nameExp)) {
                nameError.textContent = ``
            } else {
                nameError.textContent = `Name should be contains alphabetics only.`
            }
        }

        //Number Validation
        if (mobile === '') {
            mobileError.textContent = `Mobile Number is Mandatory`
        }
        else {
            if (mobile.match(numExp)) {
                mobileError.textContent = ''
            }
            else {
                mobileError.textContent = `Incorrect Mobile Number `
            }
        }
        //Email Validation
        if (email === '') {
            emailError.textContent = `Email Address is Mandatory`
        }
        else {
            if (email.match(emailExp)) {
                emailError.textContent = ''
            }
            else {
                emailError.textContent = `Invalid Email Address `
            }
        }
    }
    render() {
        return (
            <form method='post' onSubmit={this.submitHandler}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" name='name' onChange={this.changeEnquiry} className="form-control form-control-lg" placeholder="Your Name" />
                        <p id='nameError'></p>
                    </div>
                    <div className="col-md-6">
                        <input type="email" name='email' onChange={this.changeEnquiry} className="form-control form-control-lg" placeholder="Your Email" />
                        <p id='emailError'></p>
                    </div>

                    <div className="col-md-6">
                        <input type="text" name='mobile' onChange={this.changeEnquiry} className="form-control form-control-lg" placeholder="Phone Number" />
                        <p id='mobileError'></p>
                    </div>

                    <div className="col-md-6">
                        <select className="form-control form-control-lg" name='service' onChange={this.changeEnquiry}>
                            <option>Select Service</option>
                            <option>Car Rental</option>
                            <option>Self-Drive</option>
                            <option>Outstation Trip</option>
                            <option>Corporate Booking</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <textarea name='message' onChange={this.changeEnquiry} className="form-control form-control-lg" rows="4" placeholder="Your Message"></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-primary btn-lg px-5">Submit</button>
                    </div>
                </div>
            </form>

        )
    }
}
