import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import tea from  "./../../../../../../public/Image/tea1.jpg"
import tea1 from  "./../../../../../../public/Image/tea2.jpg"
import tea2 from  "./../../../../../../public/Image/tea3.jpg"
import tea3 from  "./../../../../../../public/Image/tea4.jpg"
import tea4 from  "./../../../../../../public/Image/tea5.jpg"
import tea5 from  "./../../../../../../public/Image/tea6.jpg"

const HomeSwiper = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className='h-[450px] rounded' src={tea} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[450px] rounded'  src={tea3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[450px] rounded'  src={tea2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[450px] rounded'  src={tea4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[450px] rounded'  src={tea1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[450px] rounded'  src={tea5} alt="" /></SwiperSlide> 
                <p className='text-center text-3xl'> ... </p>       
               
            </Swiper>
        </div>
    );
};

export default HomeSwiper;