//banana展示
import React, { useState, useEffect } from 'react'
import fetchAPI from '@utils/fetchAPI'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function page() {
    const [bananaData, setBananaData] = useState([])

    useEffect(() => {
        const init = async () => {
            const testData = await fetchAPI({
                url: 'https://bananatest.zeabur.app/api/getBananas',

            })
            setBananaData(testData && testData.data)
        }
        init();
    }, [])

    return (
        <>
            <Swiper
                className='w-full'
                modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
                loop //循環播放
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{
                //     // el: '.swiper-scrollbar',
                //     draggable: false,
                //     hide: true,
                // }}
                onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,  //移入暫停
                    // reverseDirection: true  //反方向自動輪播
                    waitForTransition: true,  //平滑的滑動 要搭配 speed
                }}
                speed={500}
                effect={'coverflow'}
            >
                {bananaData && bananaData.map((item: any, index: any) => (
                    <SwiperSlide key={index}>
                        <img src={item.url} alt={item.name} width={200} height={200} />
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    )
}