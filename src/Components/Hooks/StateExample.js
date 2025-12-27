import React, { useEffect, useState } from 'react'

const StateExample = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You Clicked ${count} times`
    }, [count])
    return (
        <div className=' container p-5'>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default StateExample