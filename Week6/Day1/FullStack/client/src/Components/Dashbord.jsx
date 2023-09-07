import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashbord = (props) => {

    //?---Refresh State

    const { refreshState } = props

    ///--------------ReadAll

    //1 - useState
    const [allStudents, setAllStudents] = useState([])

    //2 - useEffect
    useEffect(() => {
        axios.get("http://localhost:5000/api/student")
            .then((res) => {
                console.log(res.data)
                setAllStudents(res.data.AllNinjas)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refreshState])






    return (
        <fieldset>
            <legend>Dashbord</legend>
            {
                allStudents.map((oneStudent) => {
                    return <div>
                        <hr />
                        <h3>{oneStudent.name}</h3>
                        <h3>{oneStudent.age}</h3>
                        <h3>{oneStudent.Belt}</h3>


                    </div>
                })
            }



        </fieldset>
    )
}

export default Dashbord