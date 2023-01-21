import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarPost = ({ course }) => {
  return (
    <div style={{ backgroundColor:'white',width:'100%', display:'flex', alignItems:'center', border: '0.953738px solid #E0DFDB', borderRadius: '.7rem' }}>
      <div style={{ width: '50%' }}> 
        <img height='250' width='100%' src={course.image}></img>
      </div>
      <div style={{ width: '50%', marginLeft:'2rem' }}>
        <div style={{ color:'#AAAAAA', fontWeight:'600', fontSize: '1.2rem', fontFamily:'Segoe UI' }}>{course.heading}</div>
        <div style={{ lineHeight:1.1, marginTop:'.5rem', fontSize:'2.2rem', fontWeight:'600', fontFamily:'Segoe UI', color:'#393E41' }}>{course.title}</div>
        <div style={{ marginTop:'1.2rem', fontSize: '1.3rem', color:'#393E41', fontWeight: '400', fontFamily:'Segoe UI' }}>{course.description}</div>
        <div style={{ fontSize:'1.3rem', marginTop:'2.4rem', border: '0.953738px solid #E0DFDB', padding:'.5rem 2rem', color:'#FF703D', fontWeight:'400', width:'max-content', borderRadius:'.5rem', fontFamily:'Segoe UI', cursor:'pointer'}}>
          Continue Course
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
  ]
};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <img src="/images/dashboard/prevArrow.png" className={`${className}`}
      style={{ ...style, height: '4rem', width: '4rem', zIndex: 1}}
      onClick={onClick}></img>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <img src="/images/dashboard/nextArrow.png" className={className}
      style={{ ...style, height: '4rem', width: '4rem'}}
      onClick={onClick}></img>
  );
}

export default function Carousel({ courses }) {
  
  return (
    <div className="md:mx-20 mx-5">
      <Slider {...settings} >
        {
          courses.map((data) => (
            <SimilarPost course={data}/>
          ))
        }
      </Slider>
    </div>
  );
}
