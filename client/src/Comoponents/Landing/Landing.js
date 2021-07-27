import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './imgs/image1.jpg'
import image2 from './imgs/image2.jpg'
import image3 from './imgs/about-1.jpg'
import image4 from './imgs/image4.png'
import "./Landing.css"

const Landing = () => {
  return (
    <Carousel fade={false} controls = {false}>

      <Carousel.Item interval={2000}>
        <div className = "slide">
          <div className = "image">
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />            
          </div>
          <Carousel.Caption>
            <div className = "slide_text">
              <p className = "hero_top_txt">WE SUPPORT BUSINESSES</p>
              <h1 className = "hero_heading">We Help Businesses Grow and Innovate</h1>
              <button className = "button">
                <h4>CONNECT WITH US</h4>
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <div className = "slide">
          <div className = "image">
            <img
              className="d-block w-100"
              src={image2}
              alt="First slide"
            />            
          </div>
          <Carousel.Caption>
            <div className = "slide_text">
              <p className = "hero_top_txt">WE GIVE ADVICE</p>
              <h1 className = "hero_heading">Expert Financial Advice</h1>
              <button className = "button">
                <h4>CONNECT WITH US</h4>
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <div className = "slide">
          <div className = "image">
            <img
              className="d-block w-100"
              src={image3}
              alt="First slide"
            />            
          </div>
          <Carousel.Caption>
            <div className = "slide_text">
              <p className = "hero_top_txt">WE SUPPORT BUSINESSES</p>
              <h1 className = "hero_heading">We Help Your Business Grow and Innovate</h1>
              <button className = "button">
                <h4>CONNECT WITH US</h4>
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <div className = "slide">
          <div className = "image">
            <img
              className="d-block w-100"
              src={image4}
              alt="First slide"
            />            
          </div>
          <Carousel.Caption>
            <div className = "slide_text">
              <p className = "hero_top_txt">WE SUPPORT BUSINESSES</p>
              <h1 className = "hero_heading">We Help Your Business Grow and Innovate</h1>
              <button className = "button">
                <h4>CONNECT WITH US</h4>
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  )
}

export default Landing;