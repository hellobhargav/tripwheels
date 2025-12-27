import React, { Component } from 'react'

export default class Welcome extends Component {
    componentWillUnmount() {
        alert('Are you Sure ?')
    }
    render() {
        return (
            <>Welcome to Admin Dashboard</>
        )
    }
}
