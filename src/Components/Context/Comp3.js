import React, { useContext } from 'react'
import { usersData } from './Main'

const Comp3 = (props) => {
    const [count, setCount] = useContext(usersData)
    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>Comp3</p>
        </div>
    )
}

export default Comp3