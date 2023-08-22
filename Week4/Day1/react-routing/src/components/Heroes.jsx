import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from './Form'

const Heroes = () => {

    const { idHero } = useParams()
    const navigate = useNavigate()

    // anything dynamic needs STATE
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${idHero}.json`)
            .then(res => {
                // Axios Wraps everything in .data
                console.log(res.data)
                setHeroes([res.data])
            }).catch(err => {
                navigate("/ERROR:404")
                console.log(err)
            })

    }, [idHero])

    return (
        <fieldset>
            <legend>🦸 🦹  SupperHeroes {idHero}🦸‍♀️ 🦹‍♀️</legend>
            <hr />
            <Form />
            {
                (heroes) ? (<table >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Hero Name
                            </th >
                            <th >
                                Full Name
                            </th>
                            <th>
                                Publisher
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            heroes.map(hero => {
                                return (
                                    <tr key={hero.id}>
                                        <th>{hero.id}</th>
                                        <td>
                                            <img src={hero.images.sm}
                                                width="120px"
                                            />

                                        </td>
                                        <td>
                                            {hero.name}
                                        </td>
                                        <td>
                                            {hero.biography.fullName ? hero.biography.fullName : "No Data"}
                                        </td>
                                        <td>
                                            {hero.biography.publisher}
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>

                </table>) : <h1>Leading</h1>
            }


        </fieldset>
    )
}

export default Heroes