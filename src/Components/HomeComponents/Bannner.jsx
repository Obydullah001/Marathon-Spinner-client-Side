import React from 'react';
import { Autoplay , Pagination, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router';

const Bannner = () => {
    return (
         <div >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
             <SwiperSlide>
          <div class="bg-[url('https://img.freepik.com/premium-photo/crowd-people-walking-street-against-sky-sunny-day_1048944-14482880.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740')] bg-cover bg-center  w-sm h-[550px]  lg:w-5xl mx-auto lg:h-[550px]  ">
          <div className='text-center '>
          <div className=''>
            <p className='pt-[150px] lg:pt-[330px]'> Start Sprinting Today </p>
             <h1 className='text-5xl font-semibold '>
            How YoU Want To Build Community 
            </h1>
            <p className=''> Find and register for marathons that match your fitness journey.</p>
            <Link to='' href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-200 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Register Now</span>
</Link>
        </div>
         </div>
          </div>
          

          </SwiperSlide>
             <SwiperSlide>
          <div class="bg-[url('https://img.freepik.com/premium-photo/people-running-road_1048944-26238711.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740')] bg-cover bg-center  w-sm h-[550px]  lg:w-5xl mx-auto lg:h-[550px]  ">
          <div className='text-center '>
          <div className=''>
            <p className='pt-[150px] lg:pt-[330px]'> Run Your Way </p>
             <h1 className='text-5xl font-semibold '>
           Fuel Your Passion for Running
            </h1>
            <p className=''> Choose events that suit your style, distance, and challenge level.</p>
            <Link to='' href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-200 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Register Now</span>
</Link>
        </div>
         </div>
          </div>
          

          </SwiperSlide>
             <SwiperSlide>
          <div class="bg-[url('https://img.freepik.com/free-photo/young-happy-couple-giving-highfive-each-other-while-stretching-grass-before-marathon-race_637285-6657.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740')] bg-cover bg-center  w-sm h-[550px]  lg:w-5xl mx-auto lg:h-[550px]  ">
          <div className='text-center '>
          <div className=''>
            <p className='pt-[150px] lg:pt-[330px]'>For Every Runner</p>
             <h1 className='text-5xl font-semibold '>
            Where Every Mile Tells a Story
            </h1>
            <p className=''> Whether you're a beginner or a pro, there's a marathon for you.</p>
            <Link to='' href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-200 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Register Now</span>
</Link>
        </div>
         </div>
          </div>
          

          </SwiperSlide>
             <SwiperSlide>
          <div class="bg-[url('https://img.freepik.com/premium-photo/fit-people-running-race-park_13339-240082.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740')] bg-cover bg-center  w-sm h-[550px]  lg:w-5xl mx-auto lg:h-[550px]  ">
          <div className='text-center '>
          <div className=''>
            <p className='pt-[150px] lg:pt-[330px]'> Experience the Thrill of the Run </p>
             <h1 className='text-5xl font-semibold '>
            Step Into the Race of a Lifetime
            </h1>
            <p className=''>Participate in dynamic events designed for all skill levels and ages.</p>
            <Link to='' href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-200 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Register Now</span>
</Link>
        </div>
         </div>
          </div>
          

          </SwiperSlide>
           
            
            
        </Swiper>
      </div>
    );
};

export default Bannner;