import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'

export const usersData = createContext()

const Main = () => {
    const [count, setCount] = useState(0)
    return (
        <div className=' container p-5'>
            <usersData.Provider value={[count, setCount]}>
                <h2>Counter : {count}</h2>
                <button onClick={() => setCount(count + 1)}>Add</button>
                <p>Main</p>
                <Comp1 />
            </usersData.Provider>
        </div>
    )
}

export default Main