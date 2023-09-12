import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const DisplayAllNotes = () => {



    ///--------------ReadAll

    //1 - useState
    const [AllNotes, setAllNotes] = useState([])

    //2 - useEffect
    useEffect(() => {
        axios.get("http://localhost:5000/api/notes")
            .then((res) => {
                console.log(res.data)
                setAllNotes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const DeleteNote = (noteId) => {
        axios.delete(`http://localhost:5000/api/notes/${noteId}`)
        //--filter
        const filtredNotes = AllNotes.filter((eachNote) => {
            if (eachNote._id == noteId) {
                return false
            } else {
                return true
            }
        })
        setAllNotes(filtredNotes)
    }
    return (
        <div>
            DisplayAllNotes

            {
                AllNotes.map((oneNote) => {
                    return <div>
                        <h3>{oneNote.isComplete ? "📌" : "No Complete"} - <Link to={"/notes/" + oneNote._id}>{oneNote.Title}</Link>
                        </h3>
                        <p>
                            {oneNote.Content}
                        </p>
                        <p>
                            date: {oneNote.createdAt}
                        </p>
                        <Link to={`/${oneNote._id}/edit`}>Edit</Link>
                        <button onClick={() => { DeleteNote(oneNote._id) }}>Delete</button>


                    </div>
                })
            }





        </div>
    )
}

export default DisplayAllNotes