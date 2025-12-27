import React, { Component } from 'react'

export default class MobileEx extends Component {
    render() {
        return (
            <div className='mobile'>
                <figure>
                    <img src={this.props.path} alt='' />
                    <figcaption>
                        <h3>{this.props.title}</h3>
                        <p>₹{this.props.price}/- Only</p>
                    </figcaption>
                </figure>
            </div>

        )
    }
}
