import React, { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")


    const addNewUser = (e) => {
        e.preventDefault()

        const newUser = {
            name,
            age
        }
        props.addNewOne(newUser)

    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={addNewUser}>
                name :<input onChange={(e) => { setName(e.target.value) }} value={name} /><br />
                age :<input onChange={(e) => { setAge(e.target.value) }} value={age} />
                <button>Add newUser</button>
            </form>
        </fieldset>
    )
}

export default Form