import React, { useState } from 'react'
import Form from '../Components/Form'
import Dashbord from '../Components/Dashbord'

const Main = () => {
    const [refreshState, setRefreshState] = useState(false)

    const refresh = () => {
        setRefreshState(!refreshState) //true
    }

    return (
        <div>
            <Form refresh={refresh} />
            <Dashbord refreshState={refreshState} />
        </div>
    )
}

export default Main