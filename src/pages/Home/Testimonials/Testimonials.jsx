import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviwes, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-16">
            <SectionTitle

                subHeading={'What Our Client Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviwes.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24  m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-3xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;