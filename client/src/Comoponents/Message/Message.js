import React, { useState, useEffect } from 'react';
import "./Message.css"
import quote from '../Home/icons/quote.svg'
import user from './imgs/user.svg'

const Message = () => {

    // Initially displaying first slide:
    var slideIndex = 1;

    // Getting current slide from navigation dot
    function currentSlide(n) {
      console.log("pressed on the dot: " + n);
      showSlides((slideIndex = n));
    }
  
    function showSlides(n) {
      var i; // variable for indexing
      var slides = document.getElementsByClassName("slide_container");
      var dots = document.getElementsByClassName("dots");
  
      // Clearing All Slides:
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      // Setting Current Dot to Active:
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
  
      // Displaying Other Slides:
      slides[slideIndex - 1].style.display = "flex";
      dots[slideIndex - 1].className += " active";
    }
  
    // Mounting Slide Index
    useEffect(() => {
      showSlides(slideIndex);
    },[]);


    // Main/Return
    return (
        <>
        <div className = "carousel_container">
            <div className = "slide_container">
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 1</h2>
                                <p className = "card_position">Position 1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 2</h2>
                                <p className = "card_position">Position 2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 3</h2>
                                <p className = "card_position">Position 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "slide_container">
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 4</h2>
                                <p className = "card_position">Position 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 5</h2>
                                <p className = "card_position">Position 5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 6</h2>
                                <p className = "card_position">Position 6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "slide_container">
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 7</h2>
                                <p className = "card_position">Position 7</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 8</h2>
                                <p className = "card_position">Position 8</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card_container">
                    <div className = "message_icon_background">
                        <img src = {quote} className = "message_icon" />
                    </div>
                    <div className = "card">
                        <p className = "card_text">
                            Far far away, behind the word <br /> 
                            mountains, far from the countries <br /> 
                            Vokalia and Consonantia, there live the <br /> 
                            blind texts.
                        </p>
                        <div className = "card_info">
                            <img src = {user} className = "card_photo" />
                            <div className = "card_id">
                                <h2 className = "card_name">Name 9</h2>
                                <p className = "card_position">Position 9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Navigation Dots */}
        <div className = "navigation_dots">
            <div className = "dots" onClick = {() => currentSlide(1)}></div>
            <div className = "dots" onClick = {() => currentSlide(2)}></div>
            <div className = "dots" onClick = {() => currentSlide(3)}></div>
        </div>

        </>

    )
}

export default Message