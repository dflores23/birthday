
import { Link } from "react-router-dom"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"




// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


export default function Birthday ({birthday}) {



    return (
        <>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                <SwiperSlide><div className="box">
                    <Link to={`/birthday/${birthday.id}`}>
                        <h1>🎁 {birthday.name} 🎁</h1>
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