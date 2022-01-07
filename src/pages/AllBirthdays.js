import React from "react"
import Birthday from "../components/Birthday"   
import Slider from "react-touch-drag-slider"

const AllBirthday =(props) => {
    return props.birthdays.map((birthday)=> {
        return <Birthday key={birthday.id} birthday={birthday}
        />
    })
}

export default AllBirthday