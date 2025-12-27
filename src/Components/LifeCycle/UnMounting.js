import React, { Component } from 'react'
import Welcome from './Welcome'

export default class UnMounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: true
        }
    }
    logout = () => {
        this.setState({
            login: !this.state.login
        })
    }
    render() {
        let msg = null;

        if (this.state.login) {
            msg = <Welcome />
        }
        else {
            msg = 'Please Login Again'
        }

        return (
            <div className=' container p-5'>
                <h1>
                    {msg}
                </h1>
                <button onClick={this.logout}>Status</button>
            </div>
        )
    }
}
