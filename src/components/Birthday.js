import React from "react"
import { Link } from "react-router-dom"


const Birthday = ({ birthday }) => {


    return (
        <div className="box">
            <Link to={`/birthday/${birthday.id}`}>
                <h1>🎁 {birthday.name} 🎁</h1>
                <h2>{birthday.birthday}</h2>
                <h3>{birthday.details}</h3>
            </Link>

        </div>
    )
}


export default Birthday