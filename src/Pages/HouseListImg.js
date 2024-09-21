import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import myImages from './Images';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import 'swiper/modules/pagination';
// import 'swiper/modules/navigation';

import '../Style/swiper2.css';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper swiper2"
            >
                <SwiperSlide ><img src={myImages.houseone} alt='house' /></SwiperSlide>
                <SwiperSlide><img src={myImages.housesix} alt='house' /></SwiperSlide>
                <SwiperSlide><img src={myImages.houseseven} alt='house' /></SwiperSlide>
                <SwiperSlide><img src={myImages.hostelImage} alt='house' /></SwiperSlide>
                {/* <SwiperSlide><img src={myImages.houseImg} alt='house' /></SwiperSlide> */}
            </Swiper>
        </>
    );
}
