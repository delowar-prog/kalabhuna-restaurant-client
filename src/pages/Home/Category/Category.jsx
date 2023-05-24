import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
    return (
        <div className="w-[80%] mx-auto my-12">
            <SectionTitle 
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                centeredSlides={false}//if true start from center
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1}></img>
                    <h3 className="text-white uppercase -mt-10 text-center text-3xl">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2}></img>
                    <h3 className="text-white uppercase -mt-10 text-center text-3xl">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3}></img>
                    <h3 className="text-white uppercase -mt-10 text-center text-3xl">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4}></img>
                    <h3 className="text-white uppercase -mt-10 text-center text-3xl">Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5}></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Category