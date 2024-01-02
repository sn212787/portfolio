import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        "Its a Wonderful person that completed my project on my time with beautifull visuals. Its a wonderfull time with him. Thanks!  ",
    },
    {
      avatar: AVTR2,
      name: "Tina Snow",
      review:
        "Its a Wonderful person that completed my project on my time with beautifull visuals. Its a wonderfull time with him. Thanks!  ",
    },
    {
      avatar: AVTR3,
      name: "Tina Snow",
      review:
        "Its a Wonderful person that completed my project on my time with beautifull visuals. Its a wonderfull time with him. Thanks!  ",
    },
    {
      avatar: AVTR4,
      name: "Tina Snow",
      review:
        "Its a Wonderful person that completed my project on my time with beautifull visuals. Its a wonderfull time with him. Thanks!  ",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testmonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonials">
              <div className="client__avator">
                <img src={avatar} alt="avator_1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
