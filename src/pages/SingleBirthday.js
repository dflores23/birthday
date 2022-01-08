import React from "react"
import { Link } from "react-router-dom"


const SingleBirthday = ({ birthdays, match, edit, deleteBirthday}) => {
    const id = parseInt(match.params.id)
    const birthday = birthdays.find((birthday) => birthday.id === id)

    return (
        <div class="box">
            <h1>🎁 {birthday?.name} 🎁</h1>
            <h2>{birthday?.birthday}</h2>
            <h3>{birthday?.details}</h3>
            <button onClick={(event) => edit(birthday)}>Edit</button>
            <button onClick={(event) => deleteBirthday(birthday)}>Delete</button>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default SingleBirthday

