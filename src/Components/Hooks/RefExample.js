import React, { useEffect, useRef } from 'react'

const RefExample = () => {
    const qty = useRef()
    const increment = () => {
        qty.current.value++;
        qty.current.focus()
    }
    useEffect(() => {
        alert('Rendered')
    })
    return (
        <div className=' container p-5'>
            <h2>Reference Example</h2>
            <input placeholder='No Of Items' ref={qty} />
            <button onClick={increment}>+</button>
        </div>
    )
}

export default RefExample