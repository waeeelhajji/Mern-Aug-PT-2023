import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateNote = () => {

    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [isComplete, setIsComplete] = useState()
    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});

    const { noteId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:5000/api/notes/${noteId}`)
            .then(res => {
                console.log(res.data)
                const { Title, Content, isComplete } = res.data
                setTitle(Title)
                setContent(Content)
                setIsComplete(isComplete)

            })
            .catch((err => console.log(err)))
    }, [])

    const UpdateHandler = (e) => {
        e.preventDefault()
        const newNote = {
            Title,
            Content,
            isComplete
        }
        axios.put(`http://localhost:5000/api/notes/${noteId}`, newNote)
            .then(res => {
                console.log("Successfully Updates ✅✅✅")
                navigate("/")
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
            <h1>UpdateNote</h1>
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={UpdateHandler} >
                Title :
                <input onChange={(e) => { setTitle(e.target.value) }} value={Title} required /> <br /><br /><br />
                {ObjErrors.Title ? <p>{ObjErrors.Title}</p> : null}
                Content :
                <textarea onChange={(e) => { setContent(e.target.value) }} value={Content} /><br /><br /><br />
                Important  :
                <input type="checkbox" checked={isComplete} onChange={(e) => { setIsComplete(e.target.checked) }} />
                <input type="Submit" value="ADD Note" />
            </form>



        </div>
    )
}

export default UpdateNote