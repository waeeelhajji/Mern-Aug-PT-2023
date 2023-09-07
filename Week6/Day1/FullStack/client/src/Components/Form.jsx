import axios from 'axios'
import React, { useState } from 'react'

const Form = (props) => {

    //--Refresh FUN
    const { refresh } = props
    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});



    //!-1 useState
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [Belt, setBelt] = useState("")
    //!-2 SuBmitHandler
    const SubmitHandler = (e) => {
        e.preventDefault()
        const newSt = {
            name,
            age,
            Belt
        }
        axios.post("http://localhost:5000/api/student", newSt)
            .then(res => {
                console.log("Successfully submitted ✅✅✅")
                setName("")
                setAge(0)
                setBelt("")
                refresh()
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                const ObjE = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                    ObjE[key] = errorResponse[key].message
                    // name        :  "name is required"

                }
                // Set Errors
                setErrors(errorArr);
                setObjErrors(ObjE)
                console.log(errors)


            })
    }

    return (
        <fieldset>
            <legend>Form</legend>
            {/* //3 - Rendering Data */}
            {/* //!-3 FORM */}
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={SubmitHandler}>
                Name of the student :
                <input onChange={(e) => { setName(e.target.value) }} value={(name)} /> <br /><br /><br />
                {ObjErrors.name ? <p>{ObjErrors.name}</p> : null}
                Age of the Student :
                <input onChange={(e) => { setAge(e.target.value) }} value={(age)} /><br /><br /><br />
                Belt of the Student :
                <input onChange={(e) => { setBelt(e.target.value) }} value={(Belt)} /><br /><br /><br />
                <input type="Submit" value="ADD Student" />
            </form>
        </fieldset>
    )
}

export default Form