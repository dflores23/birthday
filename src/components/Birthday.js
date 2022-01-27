
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"




// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);


export default function Birthday({ birthday }) {



    return (
        <>
            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                "shadow": true,
                "slideShadows": true,
                "shadowOffset": 20,
                "shadowScale": 0.94
            }} pagination={true} className="mySwiper">
                <SwiperSlide><div className="box">
                    <Link to={`/birthday/${birthday.id}`}>
                        <h1>{birthday.name}</h1>
                    </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="box">
                    <Link to={`/birthday/${birthday.id}`}>

                        <h2>{birthday.birthday}</h2>

                    </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="box">
                    <Link to={`/birthday/${birthday.id}`}>

                        <h3>{birthday.details}</h3>
                    </Link>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}