import React, { Component } from 'react'

export default class LCMethods extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }

        console.log('constructor');

    }
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');

        return null
    }

    componentDidMount() {
        console.log('componentDidMount');

    }
    add = () => {
        console.log('Update Phase Stated');

        this.setState({
            count: this.state.count + 1
        })
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(preProp, preState) {
        console.log('getSnapshotBeforeUpdate', preState.count);

        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate :  ', this.state.count);

    }
    render() {
        console.log('render');

        return (
            <div className=' container p-5'>
                <h2>Counter : {this.state.count}</h2>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}
