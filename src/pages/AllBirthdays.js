import React from "react"
import Birthday from "../components/Birthday"   
// import Swiper from  "swiper"



const AllBirthday =(props) => {
    return props.birthdays.map((birthday)=> {
        return <Birthday key={birthday.id} birthday={birthday}
        />
    })
}

export default AllBirthday



