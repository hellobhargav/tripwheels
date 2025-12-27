import React from 'react'
import './style.css';


const StyleExample = () => {
    const mystyles = {
        backgroundColor: "red",
        color: 'white',
        padding: '20px'
    }
    return (
        <div>
            <h2 style={{ color: "red" }}>Inline Example</h2>
            <h2 style={mystyles}>Internal Example</h2>
            <h2 className='success'>External Example</h2>
        </div>
    )
}

export default StyleExample