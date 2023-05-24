import SectionTitle from "../../../components/SectionTitle"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div className="w-[70%] mx-auto my-8">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => {
                            return <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center mx-20">
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={review.rating}
                                        readOnly
                                        className="my-5"
                                    />
                                    <p>{review.details}</p>
                                    <h1 className="text-yellow-600 uppercase text-lg my-5">{review.name}</h1>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials