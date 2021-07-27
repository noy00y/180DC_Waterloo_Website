import React, { useRef, useEffect } from "react";
import "./WhyUs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonial_image1 from '../../../assets/people-3-small.jpg'
import testimonial_image2 from '../../../assets/people-1-small.webp'
import testimonial_image3 from '../../../assets/people-4-350x350.jpg'
import down_arrow from '../../../assets/down-arrow.png'
import Logo_180DC from '../../../assets/180DC-Waterloo Logos/TRANSPARENT_SHORT_BLACK_TEXT.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function WhyUs() {
  gsap.registerPlugin(ScrollTrigger);
  const clientRef = useRef(null);
  const logoRef = useRef(null);
  const testimonialRef = useRef(null);
  const statsRef = useRef(null);
  const needMoreRef = useRef(null)

  useEffect(() => {
    const logoElement = logoRef.current;
    const clientElement = clientRef.current;
    const testimonialElement = testimonialRef.current;
    const statsElement = statsRef.current;
    const needMoreElement = needMoreRef.current;

    gsap.to(
      logoElement,
      {
        scrollTrigger: {
          trigger: logoElement,
          start: "top top",
          endTrigger: needMoreElement,
          end: "top top",
          pin: logoElement,
          // markers: true,
        }
      }
    );

    gsap.fromTo(
      [
        statsElement.querySelector(".section_heading"),
        statsElement.querySelector(".section_number"),
        statsElement.querySelector(".section_subheading")
      ],
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: statsElement,
          start: "top 70%",
          end: "80% bottom",
          scrub: true,
          // markers: true,
        }
      }
    )

    gsap.fromTo(
      [
        testimonialElement.querySelector(".section_heading"),
        testimonialElement.querySelector(".section_number"),
        testimonialElement.querySelector(".section_subheading")
      ],
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: testimonialElement,
          start: "top 70%",
          end: "80% bottom",
          scrub: true,
          // markers: true,
        }
      }
    )

    gsap.fromTo(
      [
        clientElement.querySelector(".section_heading"),
        clientElement.querySelector(".section_subheading"),
        clientElement.querySelector(".section_number"),
      ],
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: clientElement,
          start: "top 80%",
          end: "80% bottom",
          scrub: true,
          //markers: true,
        }
      }
    )

    gsap.fromTo(
      [
        needMoreElement.querySelector(".heading"),
        needMoreElement.querySelector(".subheading")
      ],
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: needMoreElement,
          start: "top center",
          end: "130% bottom",
          scrub: true,
          // markers: true,
        }
      }
    )
    
    gsap.fromTo(
      [
        needMoreElement.querySelector("img")
      ],
      {
        y: -30,
        opacity: 0
      },
      {
        y: 130,
        opacity: 1,
        scale: 1.6,
        scrollTrigger: {
          trigger: needMoreElement,
          start: "bottom bottom",
          end: "100%+=50px 70%",
          scrub: true,
          // markers: true,
        }
      }
    )
    
  }, [])

  return (
    <div className="whyUs">
      <div className="left-sidebar">
        <div ref={logoRef} className="logo">
          <img src={Logo_180DC} alt="180 DC logo"/>
          <h3 className="left_heading">Why Choose Us?</h3>
          <div className="left_button">
            <a>Contact Us</a>
          </div>
        </div>
      </div>
      <div className="right-scrollable">
        <div ref={statsRef} className="section stats_section">
          <span className="rufina_font section_number">01.</span>
          <span className="section_heading">Let the numbers speak!</span>
          <span className="section_subheading">Lorem Ipsum has been the industry's standard dummy text ever</span>
          <div className="stats_box">
            <div className="stat">
              <div className="stat_logo">
                <svg viewBox="0 -24 415.32856 415" xmlns="http://www.w3.org/2000/svg"><path d="m368.328125 130.164062h-26.390625v-41.644531c-.035156-27.300781-22.15625-49.425781-49.460938-49.457031h-69.386718c-7.964844.003906-15.660156-2.878906-21.664063-8.105469l-22.109375-19.246093c-8.558594-7.445313-19.515625-11.546876-30.859375-11.546876h-99c-27.300781.03125-49.425781 22.15625-49.457031 49.457032v260.753906c.0351562 30.257812 23.714844 55.214844 53.929688 56.839844v.078125h280.203124c22.375-.042969 41.636719-15.820313 46.078126-37.753907l34.167968-143 .058594-.269531c2.726562-13.792969-.871094-28.082031-9.796875-38.945312-8.929687-10.863281-22.25-17.160157-36.3125-17.160157zm-354.324219 180.210938v-260.753906c.023438-19.574219 15.882813-35.433594 35.457032-35.457032h99c7.964843 0 15.660156 2.878907 21.667968 8.109376l22.109375 19.242187c8.554688 7.445313 19.511719 11.546875 30.851563 11.546875h69.386718c19.574219.023438 35.4375 15.886719 35.460938 35.460938v41.640624h-6.652344c-3.394531-18.140624-19.21875-31.300781-37.675781-31.328124h-2.3125c-3.402344-18.515626-19.53125-31.972657-38.359375-32h-161c-25.945312.03125-46.972656 21.054687-47 47v233.378906c-12.976562-7.742188-20.925781-21.734375-20.933594-36.839844zm269.605469-197.539062c10.734375.011718 20.199219 7.046874 23.300781 17.328124h-118.894531c-21.746094-.066406-40.671875 14.847657-45.699219 36.003907l-43.558594 153.8125-.078124.292969c-1.636719 6.957031-4.984376 13.394531-9.742188 18.726562v-193.164062c.019531-18.21875 14.785156-32.980469 33-33zm-234.671875 239.699218v-238.699218c.019531-18.21875 14.785156-32.980469 33-33h161c11.105469.011718 20.878906 7.339843 24 18h-145c-25.945312.027343-46.96875 21.054687-47 47v203.519531c-8.125 3.738281-17.214844 4.847656-26 3.179687zm351.792969-169.109375-34.164063 142.988281-.058594.273438c-3.082031 15.445312-16.628906 26.574219-32.375 26.605469h-239.742187c8.898437-7.78125 15.148437-18.140625 17.878906-29.640625l43.558594-153.808594.078125-.292969c3.488281-14.902343 16.800781-25.429687 32.109375-25.386719h180.3125c9.851563 0 19.183594 4.398438 25.453125 11.996094s8.816406 17.597656 6.949219 27.269532zm0 0"/></svg>
              </div>
              <div className="stat_text">
                <span className="main">
                  500+
                </span>
                <span className="main_text">
                  <strong>Successfully</strong> completed cases
                </span>
              </div>
            </div>
            <div className="stat">
              <div className="stat_logo">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 48 48"><path d="M7.847 25.144H26.423a.75.75 0 0 0 0-1.5H8.6V9.688a.75.75 0 1 0-1.5 0V24.394A.75.75 0 0 0 7.847 25.144zM32.092 13.644h8.263a.75.75 0 0 0 0-1.5H32.092a.75.75 0 0 0 0 1.5zM32.092 17.794h8.263a.75.75 0 0 0 0-1.5H32.092a.75.75 0 0 0 0 1.5zM32.092 21.944h8.263a.75.75 0 0 0 0-1.5H32.092a.75.75 0 0 0 0 1.5z"/><path d="M10.74,22.321a.749.749,0,0,0,.524-.213l4.942-4.82,2.353,1.736a.748.748,0,0,0,1-.1l6.112-6.776v.683a.75.75,0,1,0,1.5,0V10.2a.75.75,0,0,0-.75-.75H23.468a.75.75,0,1,0,0,1.5h1.267L18.9,17.414,16.584,15.7a.751.751,0,0,0-.969.067l-5.4,5.265a.75.75,0,0,0,.523,1.287Z"/><path d="M45.6,2.259H2.4A2.406,2.406,0,0,0,0,4.663V32.729a2.407,2.407,0,0,0,2.4,2.405H45.6A2.407,2.407,0,0,0,48,32.729V4.663A2.406,2.406,0,0,0,45.6,2.259Zm.9,30.47a.905.905,0,0,1-.9.905H2.4a.905.905,0,0,1-.9-.905V4.663a.9.9,0,0,1,.9-.9H45.6a.9.9,0,0,1,.9.9Z"/><path d="M44.176 5.121H3.824a.75.75 0 0 0-.75.75V28.708a.75.75 0 0 0 .75.75H44.176a.75.75 0 0 0 .75-.75V5.871A.75.75 0 0 0 44.176 5.121zm-.75 22.837H4.574V6.621H43.426zM32.092 41.482H28.9l-.51-4.61a.75.75 0 1 0-1.491.165l.584 5.278a.75.75 0 0 0 .746.667h3.116v1.259H16.658V42.982h3.116a.75.75 0 0 0 .746-.667l.584-5.278a.75.75 0 1 0-1.491-.165l-.51 4.61h-3.2a.75.75 0 0 0-.75.75v2.759a.75.75 0 0 0 .75.75H32.092a.75.75 0 0 0 .75-.75V42.232A.75.75 0 0 0 32.092 41.482z"/></svg>
              </div>
              <div className="stat_text">
                <span className="main">
                  500+
                </span>
                <span className="main_text">
                  <strong>Successfully</strong> completed cases
                </span>
              </div>
            </div>
          </div>
          <div className="stats_box">
            <div className="stat">
              <div className="stat_logo">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="line expand" viewBox="0 0 48 48"><path d="M26.578,26.456a9.85,9.85,0,0,0-4.923,1.316.75.75,0,1,0,.751,1.3,8.361,8.361,0,1,1-1.716,1.315.75.75,0,1,0-1.058-1.063,9.847,9.847,0,1,0,6.946-2.867Z"/><path d="M27.393 39.268H25.51A1.108 1.108 0 0 1 24.4 38.161a.75.75 0 0 0-1.5 0 2.61 2.61 0 0 0 2.607 2.607H25.7v1.438a.75.75 0 0 0 1.5 0V40.768h.191a2.607 2.607 0 0 0 0-5.214H25.51a1.108 1.108 0 0 1 0-2.215h1.883A1.108 1.108 0 0 1 28.5 34.446a.75.75 0 0 0 1.5 0 2.61 2.61 0 0 0-2.607-2.607H27.2V30.4a.75.75 0 0 0-1.5 0v1.439H25.51a2.608 2.608 0 0 0 0 5.215h1.883a1.107 1.107 0 0 1 0 2.214zM44.417 15.637a.75.75 0 0 0-.4 1.445c2.029.564 2.486 1.2 2.486 1.372 0 .626-2.935 2.094-8.625 2.094s-8.626-1.468-8.626-2.094 2.934-2.094 8.626-2.094a27.333 27.333 0 0 1 4.023.283.751.751 0 0 0 .221-1.485 29.106 29.106 0 0 0-4.244-.3c-4.877 0-10.126 1.125-10.126 3.594v5.835c0 2.469 5.249 3.594 10.126 3.594 3.278 0 6.718-.511 8.625-1.595v.918c0 .626-2.935 2.094-8.625 2.094-.653 0-1.289-.02-1.9-.06a.758.758 0 0 0-.8.7.749.749 0 0 0 .7.8c.645.042 1.314.064 2 .064 3.278 0 6.718-.511 8.625-1.6v.918c0 .626-2.935 2.1-8.625 2.1l-.247 0c-.042 0-.066 0-.2 0a.779.779 0 0 0-.772.727.752.752 0 0 0 .728.773c.1 0 .163 0 .205 0l.1 0 .194 0c3.278 0 6.718-.512 8.625-1.6v.918c0 .626-2.935 2.094-8.625 2.094a.75.75 0 0 0 0 1.5c3.278 0 6.718-.512 8.625-1.595v.991c0 .626-2.935 2.094-8.625 2.094h-.269a.794.794 0 0 0-.758.742.751.751 0 0 0 .742.758h.285C42.751 39.625 48 38.5 48 36.031V18.454C48 17.624 47.378 16.462 44.417 15.637zm-6.542 6.411c3.278 0 6.718-.511 8.625-1.595v.918c0 .626-2.935 2.1-8.625 2.1s-8.626-1.469-8.626-2.1v-.918C31.156 21.537 34.6 22.048 37.875 22.048zm0 4.335c-5.692 0-8.626-1.468-8.626-2.094v-.918c1.907 1.084 5.346 1.6 8.626 1.6s6.718-.511 8.625-1.6v.918C46.5 24.915 43.565 26.383 37.875 26.383zM15.8 40.28c-.264.01-.53.016-.8.016-7.95 0-13.5-4.561-13.5-11.091 0-5.325 3.6-13.2 8.969-16.435.073-.045.134-.1.2-.15H16.8a.75.75 0 0 0 0-1.5H11.615a2.25 2.25 0 0 0-.326-1.626C8.754 5.567 8.261 3.8 8.353 3.342a.053.053 0 0 0 .032.007 11.7 11.7 0 0 1 3.323.506 11.594 11.594 0 0 0 3.214.5 15.118 15.118 0 0 0 3.643-.538 13.576 13.576 0 0 1 2.883-.468c-.027.565-.587 2.234-2.524 5.54H13.2a.75.75 0 0 0 0 1.5h5.062a2.234 2.234 0 0 0 .048.837 2.409 2.409 0 0 0 1.133 1.486 18.354 18.354 0 0 1 6.348 7.069.75.75 0 1 0 1.317-.717 19.853 19.853 0 0 0-6.9-7.643.927.927 0 0 1-.443-.563.76.76 0 0 1 .091-.591c3.764-6.262 3.156-7.337 2.9-7.8a1.253 1.253 0 0 0-1.132-.625 14.31 14.31 0 0 0-3.4.511 13.742 13.742 0 0 1-3.3.5 10.2 10.2 0 0 1-2.83-.453 13.307 13.307 0 0 0-3.707-.556 1.425 1.425 0 0 0-1.335.725c-.252.463-.922 1.693 2.979 7.735a.759.759 0 0 1 .109.6.932.932 0 0 1-.444.581C3.9 14.982 0 23.471 0 29.205 0 36.5 6.31 41.8 15 41.8q.432 0 .858-.018a.75.75 0 1 0-.059-1.5z"/></svg>
              </div>
              <div className="stat_text">
                <span className="main">
                  500+
                </span>
                <span className="main_text">
                  <strong>Successfully</strong> completed cases
                </span>
              </div>
            </div>
            <div className="stat">
              <div className="stat_logo">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512"><path d="M435.1,298.2l-2.372,1.28c-9.582-11.628-26.183-16.134-38.831-9.724-.045.022-.09.046-.134.069l-5.6,3.015a42.527,42.527,0,0,0-48.7-4.4l-30.155,16.4H269.182a57.961,57.961,0,0,1-25.09-5.749l-5.52-2.67a94.693,94.693,0,0,0-98.552,9.625c-.131.1-.259.2-.381.313l-13.327,11.864a46.226,46.226,0,0,1-17.443,9.723L101.3,303.1a6,6,0,0,0-5.739-4.25H31.108a6,6,0,0,0-5.956,6.726l21.484,176.16a6,6,0,0,0,5.956,5.274h96.674a6,6,0,0,0,5.739-7.75l-12.7-41.674,39.554-25a23.8,23.8,0,0,1,17.365-2.247c.124.031.249.059.375.081l80.459,14.816a104.117,104.117,0,0,0,64.337-9.084,5.918,5.918,0,0,0,.734-.43l139.164-95.552a6,6,0,0,0,1.744-8.041A38.2,38.2,0,0,0,435.1,298.2Zm-35.717,2.228c7.315-3.663,16.524-.66,22.406,4.953l-52.772,28.47-3.1,1.633a45.752,45.752,0,0,0-7.228-13.131Zm-54.113-1.485c.047-.027.1-.053.142-.081a30.516,30.516,0,0,1,31.037.292L349.618,313.6a45.592,45.592,0,0,0-17.138-7.713ZM57.9,475.01,37.885,310.85H91.114l50.05,164.16Zm280.784-69.431a92.038,92.038,0,0,1-56.479,7.848l-80.261-14.78a35.777,35.777,0,0,0-26.085,3.535c-.093.051-.186.107-.277.165l-36.915,23.337-26.3-86.251a58.265,58.265,0,0,0,21.917-12.257l13.139-11.7a82.736,82.736,0,0,1,85.918-8.265l5.519,2.67a70.036,70.036,0,0,0,30.315,6.946h53.525a33.851,33.851,0,0,1,33.2,27.49l-38.795-1.755a232.313,232.313,0,0,0-42.22,1.951,6,6,0,0,0,1.646,11.886,219.979,219.979,0,0,1,40.031-1.848l45.656,2.065c.091,0,.182.006.272.006a6,6,0,0,0,6-6c0-.971-.041-1.933-.1-2.89l6.261-3.3L440.8,308.756a26.214,26.214,0,0,1,31.544,5.056Z"/><path d="M76.974,450.188a18.89,18.89,0,1,0,18.89-18.89A18.911,18.911,0,0,0,76.974,450.188Zm18.89-6.89a6.89,6.89,0,1,1-6.89,6.89A6.9,6.9,0,0,1,95.864,443.3Z"/><path d="M301.622,90.305V70.533a45.544,45.544,0,0,0-91.087,0V90.305a45.544,45.544,0,0,0,91.087,0Zm-79.087,0V70.533a33.544,33.544,0,0,1,67.087,0V90.305a33.544,33.544,0,0,1-67.087,0Z"/><path d="M182.668,259.425H329.49a6,6,0,0,0,6-6V239.653H436a6,6,0,0,0,6-6V194.709a44.973,44.973,0,0,0-42.108-44.856c-3.2-.235-4.845,1.791-6.179,3.418a27.535,27.535,0,0,1-43.442-1.061,6,6,0,0,0-4.975-2.433,44.48,44.48,0,0,0-22.071,6.439,50.437,50.437,0,0,0-35.2-17.459c-3.1-.126-4.668,1.756-6.187,3.6a32.308,32.308,0,0,1-50.977-1.245,5.982,5.982,0,0,0-4.975-2.432,50.215,50.215,0,0,0-34.845,15.2c-.758.775-1.477,1.578-2.178,2.393a44.612,44.612,0,0,0-20.457-6.422c-3.189-.235-4.846,1.791-6.179,3.418a27.534,27.534,0,0,1-43.441-1.061,6.015,6.015,0,0,0-4.975-2.433A44.955,44.955,0,0,0,70,194.709v38.944a6,6,0,0,0,6,6H176.668v13.772A6,6,0,0,0,182.668,259.425Zm160.066-97.458a39.541,39.541,0,0,0,59.2.155A32.987,32.987,0,0,1,430,194.709v32.944H335.49V189.162a50.2,50.2,0,0,0-5.545-22.974A32.433,32.433,0,0,1,342.734,161.967ZM223.3,150.862a44.315,44.315,0,0,0,66.934.159,38.54,38.54,0,0,1,33.26,38.141v58.263H188.668V189.162A38.763,38.763,0,0,1,223.3,150.862ZM82,227.653V194.709a33.179,33.179,0,0,1,29.254-32.738,39.538,39.538,0,0,0,59.191.151,32.735,32.735,0,0,1,11.71,4.132,50.271,50.271,0,0,0-5.487,22.908v38.491Z"/><path d="M412.354,108.179V90.872a40.612,40.612,0,1,0-81.224,0v17.307a40.612,40.612,0,1,0,81.224,0Zm-69.224,0V90.872a28.612,28.612,0,1,1,57.224,0v17.307a28.612,28.612,0,1,1-57.224,0Z"/><path d="M180.87,108.179V90.872a40.612,40.612,0,1,0-81.224,0v17.307a40.612,40.612,0,1,0,81.224,0Zm-69.224,0V90.872a28.612,28.612,0,1,1,57.224,0v17.307a28.612,28.612,0,1,1-57.224,0Z"/></svg>
              </div>
              <div className="stat_text">
                <span className="main">
                  100%
                </span>
                <span className="main_text">
                  <strong>Satisfaction</strong> of our customers
                </span>
              </div>
            </div>
          </div>
        </div>
        <div ref={testimonialRef} className="section testimonial_section">
          <span className="rufina_font section_number">02.</span>
          <span className="section_heading">Testimonials</span>
          <span className="section_subheading">Lorem Ipsum has been the industry's standard dummy text ever</span>
            <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4100}
            >
            <div className="testimonial">
              <div className="testimonial_image">
                <img src={testimonial_image1} alt="person"></img>
              </div>
              <div className="testimonial_main">
                <h3 className="rufina_font testimonial_main_text">“Don't cry because it's over, smile because it happened.”</h3>
                <span className="testimonial_main_name">- DR. ZEUS</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial_image">
                <img src={testimonial_image2} alt="person"></img>
              </div>
              <div className="testimonial_main">
                <h3 className="rufina_font testimonial_main_text">“Be the change you want to see in the world.”</h3>
                <span className="testimonial_main_name">- DR. ZEUS</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial_image">
                <img src={testimonial_image3} alt="person"></img>
              </div>
              <div className="testimonial_main">
                <h3 className="rufina_font testimonial_main_text">“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</h3>
                <span className="testimonial_main_name">- DR. ZEUS</span>
              </div>
            </div>
            </Carousel>
        </div>
        <div ref={clientRef} className="section client_section">
          <span className="rufina_font section_number">03.</span>
          <span className="section_heading">Clients</span>
          <span className="section_subheading">Lorem Ipsum has been the industry's standard dummy text ever</span>
          <div className="brand_row row1">
            <div className="brand_col col1">
              <div className="brand_img">
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHjdEk6I0mEVw/company-logo_200_200/0/1561668377618?e=2159024400&v=beta&t=Q-QRw2rmlvUEvfKq8CgcoWBvALb5VEjaBk98Im82XGM" alt="brand logo"></img>
              </div>
            </div>
            <div className="brand_col col2">
              <div className="brand_img">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEkmBOFXOeUqA/company-logo_200_200/0/1561125194486?e=2159024400&v=beta&t=yeTnmiREPM-xZDkEVcBh-0A8M9_oTwobCGhlejzuEG0" alt="brand logo"></img>
              </div>
            </div>
            <div className="brand_col col3">
              <div className="brand_img">
                <img src="https://childrenshospitals.ca/wp-content/uploads/2019/03/logo-Childrens-Health-Foundation-320x200.png" alt="brand logo"></img>
              </div>
            </div>
          </div>
          <div className="brand_row row2">
            <div className="brand_col col1">
              <div className="brand_img">
                <img src="https://muscle.ca/wp-content/themes/maishawp-child/img/logos/2019/MDClogo_colour_ben.png" alt="brand logo"></img>
              </div>
            </div>
            <div className="brand_col col2">
              <div className="brand_img">
                <img src="http://www.bridgestobelonging.ca/wp-content/themes/bridges/images/footer-logo.jpg" alt="brand logo"></img>
              </div>
            </div>
            <div className="brand_col col3">
              <div className="brand_img">
                <img src="https://pbs.twimg.com/profile_images/1178717197184770048/GKb7v7sD.jpg" alt="brand logo"></img>
              </div>
            </div>
          </div>
          <div className="brand_row row3">
            <div className="brand_col col1">
              <div className="brand_img">
                <img src="https://pbs.twimg.com/profile_images/1310412431403839488/oKJJRfdH_400x400.jpg" alt="brand logo"></img>
              </div>
            </div>
            <div className="brand_col col2">
              <div className="brand_img">
                <img src="https://henrescue.org/wp-content/uploads/2020/04/logo_smaller-1.jpg?6bfec1&6bfec1" alt="brand logo"></img>
              </div>
            </div>
            <div className="brand_col col3">
              <div className="brand_img">
                <img src="https://pbs.twimg.com/profile_images/874646345176330242/c4uC35A2_400x400.jpg" alt="brand logo"></img>
              </div>
            </div>
          </div>
        </div>
        <div ref={needMoreRef} className="need_more_section section">
          <span className="heading rufina_font">Need More?</span>
          <span className="subheading">See some case studies</span>
          <img src={down_arrow} alt="down arrow"/>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
