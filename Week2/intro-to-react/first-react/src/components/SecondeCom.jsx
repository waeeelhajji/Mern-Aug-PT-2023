import React from 'react'

const SecondeCom = (props) => {

    console.log(`this is my zoo props ${props.anim}`)


    return (
        <fieldset>
            <legend>SecondeCom.jsx</legend>
            {props.anim.map((oneAnimal) => {
                return <li>{oneAnimal}</li>
            })}
        </fieldset>
    )
}

export default SecondeCom



