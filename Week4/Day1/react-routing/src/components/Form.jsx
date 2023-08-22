import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [number, setNumber] = useState(0)

    const navigate = useNavigate()
    const BringHero = (e) => {
        e.preventDefault()
        navigate("/heroes/" + number)
    }

    return (
        <fieldset>
            <legend>form.jsx</legend>
            <form onSubmit={BringHero}>
                <input onChange={(e) => { setNumber(e.target.value) }} />
                <button>Find the Hero</button>
            </form>
        </fieldset>
    )
}

export default Form