import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();

//   useEffect(() => {
//     swiper.slideTo(0, 1);
//   }, [data]);
// };

// const Carousel = ({ data, renderComponent }) => {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView="auto"
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <Controls />
//         <CarouselLeftNavigation />
//         <CarouselRightNavigation />
//         {data.map((ele) => {
//           return <SwiperSlide>{renderComponent(ele)}</SwiperSlide>;
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;

// import React, { useEffect } from 'react'
// import {Swiper,SwiperSlide} from 'swiper/react'
// import { useSwiper } from 'swiper/react'
// import { Navigation, } from 'swiper'
// import styles from './Carousel.module.css'
// import 'swiper/css'
// import CarouselLeftNavigation from './CarouselLeftNavigation'
// import CarouselRightNavigation from './CarouselRightNavigation'

const Controls=({data})=>{
    const swiper=useSwiper();  
    useEffect(() => {
        if(swiper){
            swiper.slideTo(0,1);
        }
    },[data]);
 
    return <></>
}
const Carousel=({data,renderComponent})=>{
    return(
        <div className={styles.wrapper}>
            <Swiper 
            style={{padding:"0px 20px"}}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={7}
            spaceBetween={40}
            allowTouchMove
            >
                <Controls data={data}/>
                <CarouselLeftNavigation/>
                <CarouselRightNavigation/>
                {data.map((ele) => (
          <SwiperSlide  >{renderComponent(ele)}</SwiperSlide>
        ))}
            </Swiper>
        </div>
    )
}
export default Carousel


