import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import 'swiper/modules/navigation';
// import 'swiper/modules/pagination';

import '../Style/swiper1.css';

// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';


/////////////////////////////////////////////////
import HouseList from './HouseList';
/////////////////////////////////////////////////

export default function App() {
  return (
    <div className='popular-section'>
      <div className='houseHead'>Featured Home</div>
      <div className='houseSubHead'>Our offerings are tailored to meet your needs and suit your lifestyle.</div>
      <div className='houses'>

        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, History]}
          className="mySwiper swiper1"
        >
          <SwiperSlide data-history="1">
            <HouseList />
          </SwiperSlide>
          <SwiperSlide data-history="Slide 2"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="3"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="Slide 4"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="5"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="Slide 6"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="7"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="Slide 8"><HouseList /></SwiperSlide>
          <SwiperSlide data-history="9"><HouseList /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
