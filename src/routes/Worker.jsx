import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Worker = () => {
    const [setNamePage] = useOutletContext()
    setNamePage('worker')
    const { id, } = useParams()
    return (
        <div>Worker: {id}</div>
    )
}

export default Worker