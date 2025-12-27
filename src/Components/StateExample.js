import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor() {
        console.log('constructor');

        super()

        //Initialize State
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        console.log('Rendered');

        return (
            <div className=' container p-5'>
                <h2>Counter : {this.state.count}</h2>
                <button onClick={this.increment} className='btn btn-primary me-2'>Increment</button>
                <button onClick={this.decrement} className='btn btn-danger me-2'>Decrement</button>
            </div>
        )
    }
}
