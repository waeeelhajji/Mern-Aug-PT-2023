import axios from 'axios'
import React, { useState } from 'react'

const CreateNote = () => {

    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});


    //!-1 useState
    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [isComplete, setIsComplete] = useState(true)
    //!-2 SuBmitHandler
    const SubmitHandler = (e) => {
        e.preventDefault()
        const newNote = {
            Title,
            Content,
            isComplete
        }
        axios.post("http://localhost:5000/api/notes", newNote)
            .then(res => {
                console.log("Successfully submitted ✅✅✅")
                setTitle("")
                setContent(0)
                setIsComplete("")
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
        <div>
            CreateNote
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={SubmitHandler}>
                Title :
                <input onChange={(e) => { setTitle(e.target.value) }} value={(Title)} /> <br /><br /><br />
                {ObjErrors.Title ? <p>{ObjErrors.Title}</p> : null}
                Content :
                <textarea onChange={(e) => { setContent(e.target.value) }} value={(Content)} /><br /><br /><br />
                Important  :
                <input type="checkbox" checked={isComplete} onChange={(e) => { setIsComplete(e.target.checked) }} />
                <input type="Submit" value="ADD Note" />
            </form>


        </div>
    )
}

export default CreateNote