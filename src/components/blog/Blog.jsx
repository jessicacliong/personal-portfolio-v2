import React from 'react';
import { blogs } from '../../Data';
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './blog.css';
const Blogs = () => {
     return (
          <section className="blogs section" id="blogs">
               <h2 className="section__title text-cs">Latest Blog</h2>
               <p className="section__subtitle">
                    My <span>Articles and Journal</span>
               </p>
               <p className="section_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               </p>
               
               <Swiper 
                    pagination={{
                         clickable: true,
                    }}
                    breakpoints={{
                         540: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                         },
                         768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                         },
                         1200: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                         },
                    }}
                    modules={[Pagination]}
                    className="blogs__container container mySwiper"
               >
                    {blogs.map(({ date, title, description }, index) => {
                         return (
                              <SwiperSlide className="blogs__item card card-two">
                                        <span className="blogs__subtitle text-cs">{date}</span>
                                        <h3 className="blogs__title">{title}</h3>
                                        <p className="blogs__description">{description}</p>
                                        <a href="" className="link">
                                             Read More
                                             <FaArrowRight className='link__icon'></FaArrowRight>
                                        </a>
                              
                                        <img src={ shapeTwo } alt="" className="shape c__shape" />
                              </SwiperSlide>
                         )
                    })}
               </Swiper>
          </section>
     )
}

export default Blogs;