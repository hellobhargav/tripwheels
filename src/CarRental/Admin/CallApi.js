import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCallApi = (endPoint) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/${endPoint}`)
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    })
    return data
}

export default useCallApi