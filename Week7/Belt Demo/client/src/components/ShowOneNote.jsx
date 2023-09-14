import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowOneNote = () => {
    const [oneNote, setOneNote] = useState({})

    const { noteId } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:5000/api/notes/${noteId}`)
            .then(res => {
                setOneNote(res.data)
            })
            .catch((err => console.log(err)))
    }, [])






    return (
        <div>
            <h1>Our Note </h1>
            <ul class="list-group">
                <li class="list-group-item list-group-item-primary" aria-disabled="true">{oneNote.Title}</li>
                <li class="list-group-item list-group-item-success">{oneNote.Content}</li>
                <li class="list-group-item list-group-item-warning">{oneNote.isComplete ? "📌" : "No Complete"} - {oneNote.Title}</li>
            </ul>
        </div>
    )
}

export default ShowOneNote