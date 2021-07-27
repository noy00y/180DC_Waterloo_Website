// Image and Icon Imports
import officeWorker from './imgs/officeworker.png'
import wealth from './icons/wealth.svg'
import accounting from './icons/accounting.svg'
import networking from './icons/networking.svg'
import analysis from './icons/analysis.svg'
import budget from './icons/budget.svg'
import calculator from './icons/calculator.svg'
import loan from './icons/loan.svg'
import tax from './icons/tax.svg'
import quote from './icons/quote.svg'

// Files, Fonts & Dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import "./Home.css"
import Landing from "../Landing/Landing"
import Message from "../Message/Message"


// Main Function for Compiling
const Home = () => {

    return (
        <>
        {/* Landing Section */}
        <Landing />

        {/* Welcome Section */}
        <div className = "welcome_container">
            <div className = "img_container">
                <img src = {officeWorker} alt="180 Degrees Consulting"></img>
            </div>

            <div className = "description_container">
                <h3>Welcome to 180 Degree Consulting</h3>
                <h1>We Are the Best Consulting Agency</h1>
                
                <div className = "descriptions">
                    {/* Market Analysis */}
                    <div className = "market_analysis">
                        <div className = "icon_container">
                            <img src = {wealth} className = "icon"/>
                        </div>

                        <div className = "Description">
                            <h2>Market Analysis</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    {/* Accouting Advisor */}
                    <div className = "accounting_analysis">
                        <div className = "icon_container">
                            <img src = {accounting} className = "icon"/> 
                        </div>
                        
                        <div className = "Description">
                            <h2>Accounting Advisor</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    {/* Consultancy */}
                    <div className = "consultancy">
                        <div className = "icon_container">
                            <img src = {networking} className = "icon"/>
                        </div>
                        
                        <div className = "Description">
                            <h2>General Consultancy</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    {/* Assesments */}
                    <div className = "assesments">
                        <div className = "icon_container">
                            <img src = {analysis} className = "icon"/> 
                        </div>
                        
                        <div className = "Description">
                            <h2>Structured Assestment</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        {/* Services */}
        <section className = "services">
            <div className = "services_container">
                {/* Section One */}
                <div className = "accounting">
                    <h2>Accounting</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                
                {/* Section Two */}
                
                <div className = "compliance">
                    <h2>Tax, Compliance and Payroll</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>

                {/* Section Three */}
                
                <div className = "financial">
                    <h2>Financial Services</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                
                {/* Section Four */}
                
                <div className = "funding">
                    <h2>Growth and Funding Access</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
            {/* Background Icons */}
            <div className = "services_icons">
                <img src = {calculator} className = "calculator_icon"/> 
                <img src = {tax} className = "tax_icon"/>  
                <img src = {loan} className = "loan_icon"/> 
                <img src = {budget} className = "budget_icon"/> 
            </div>
        </section>
        
        {/* Statistics Section */}
        <section className = "statistics">
            <div className = "statistics_container">
                <div className = "years_experience">
                    <h2 className = "number">10</h2>
                    <p className = "stat_description">Years of Experience</p>
                </div>

                <div className = "cases_completed">
                    <h2 className = "number">500</h2>
                    <p className = "stat_description">Cases Completed</p>
                </div>

                <div className = "awards_won">
                    <h2 className = "number">5</h2>
                    <p className = "stat_description">Awards Won</p>
                </div>

                <div className = "team_members">
                    <h2 className = "number">20</h2>
                    <p className = "stat_description">Expert Consultants</p>
                </div>                
            </div>
        </section>

        {/* Message From 180 */}
        <div className = "message_container">
            <div className = "message_banner">
                <h2>Message from 180's Team</h2>
            </div>

            {/* Card Carousel */}
            <Message />

        </div>
        </>
    )
}


export default Home