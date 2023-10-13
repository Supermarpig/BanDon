import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


interface InputProps {
    className?: string;
    children?: string;
    url?: string;
    name?:string;
}

const bananaSwiper = (props: InputProps) => {
    const {
        className,
        children,
        url,
        name,
    } = props;

    
    console.log(url)

    return (
        <div>
            <Swiper
                // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={`${url}`} alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
            
        </div>
    )
}

export default bananaSwiper;
