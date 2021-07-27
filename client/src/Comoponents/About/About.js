import React, {Component} from 'react'
import about_background from "./imgs_icons/about_background.png"
import productive from "./imgs_icons/productive.png"
import './About.css'
import Values from "./Values"

// icons
import businessman from "./imgs_icons/businessman.svg"
import protest from "./imgs_icons/protest.svg"
import transparency from "./imgs_icons/transparency.svg"
import social from "./imgs_icons/social.svg"
import speedometer from "./imgs_icons/speedometer.svg"
import meeting from "./imgs_icons/meeting.svg"
import planning from "./imgs_icons/planning.svg"
import integration from "./imgs_icons/integration.svg"

const about = () => {
    return (
        <>
        {/* About Banner */}
        <div className = "about_banner">
            <img src = {about_background} className = "background"/>
            <h1>About Us</h1>
        </div>

        {/* Vision */}
        <div className = "vision_container">
            <img src = {productive} className = "vision_image"/>
            <div className = "vision_text">
                <h3 className = "">180 Degree Consulting</h3>
                <h1 className = "">Vision</h1>
                <p className = "">
                    Our vision is to be an international consultancy that achieves <br />
                    significant social impact by enabling the most capable university <br />
                    students to develop sustainable solutions to challenges faced by <br />
                    socially conscious organisations.
                </p>
            </div>
        </div>

        {/* Values */}
        <div className = "values_container">
            <div className = "values_banner"><h1>Values</h1></div>       
            
            <div className = "values_list">

                {/* Professionalism */}
                <Values 
                    icon = {businessman} 
                    title = "Professionalism" 
                    principle = "In Principle: We always act in a professional manner, both in our approach to work and our interaction with clients. This helps to build both actual and perceived credibility." 
                    practice = "In Practice: Wearing business attire to all client meetings; using @180degreesconsulting.org emails when corresponding with clients; prioritising consulting work and giving it the time that is required to produce quality output."
                />

                {/* Empowerment */}
                <Values
                    icon = {protest}
                    title = "Individual Empowerment"
                    principle = "In Principle: We are decentralised. Our people are given real responsibility and ownership over their work. We trust their judgment and encourage initiative. Our people make meaningful decisions that have practical outcomes."
                    practice = "In Practice: Our executives take ownership over their portfolios; our branches run their own affairs; our team leaders have ultimate responsibility for making an impact for our clients; and our consultants are given work-streams to manage."
                />

                {/* Transparency and Accountability */}
                <Values
                    icon = {transparency}
                    title = "Accountability"
                    principle = "In Principle: In return for the opportunity to work autonomously we require that each person within 180 Degrees is transparent in their processes and stands accountable for the work they undertake, whether that work is towards or on behalf of the organisation."
                    practice = "In Practice: Teams keep branch executives fully informed about their projects; branches provide full disclosure to the international executive; we have peer reviews of all people within the organisation; international executives keep the board informed of the status of all major initiatives in the organisation."
                />

                {/* Supportive */}
                <Values
                    icon = {social}
                    title = "Supportive"
                    principle = "In Principle: We make our resources available to everyone within the organisation, help each other to overcome challenges, and ask for help when it is needed."
                    practice = "In Practice: When international executives need more resources the C-level executives try to make them available; when team leaders need help working through a problem the branch executives assist them; the international executive provides tools to help teams execute their tasks; and when a consultant needs help to finish their work-stream, the team leader provides it."
                />
                
                {/* High Performance */}
                <Values
                    icon = {speedometer}
                    title = "High Performance"
                    principle = "In Principle: We exist for the purpose of achieving social impact. The social impact we have is directly related to the quality of our recommendations, which are in turn related to the performance of our consultants. We work hard to ensure quality and we expect the same of everyone else."
                    practice = "In Practice: The performance of consultants is determined by their innate capabilities, the quality of training provided, the level of support provided, and the effort consultants put in to their work. As such we only select the most capable students to consult for 180 Degrees, we provide or facilitate professional consulting training, we provide tools to support the consulting work undertaken and consultants expect quality work from their peers."
                />

                {/* Collaboration */}
                <Values
                    icon = {meeting}
                    title = "Collaboration"
                    principle = "In Principle: We work together in teams because we believe that the best decisions are made by brainstorming ideas, hearing different perspectives, and debating what is the best course of action. We have a consultative decision making process. We believe people are most likely to embrace change when they are included."
                    practice = "In Practice: Heads of Branches are involved in developing strategies at an international level; major changes to the way branches operate are approved by the Heads of Branches; branch executives discuss major changes as a group before decisions are made; and consulting teams develop recommendations together before the team leader decides the course of action."
                />

                {/* Methodical */}
                <Values
                    icon = {planning}
                    title = "Methodical"
                    principle = "In Principle: We conduct thorough analyses and develop strategies before we act. We use consistent and logical problem solving tools when developing solutions to problems."
                    practice = "In Practice: We use the 180 Degrees Methodology in all our engagements; we use structured problem solving methods to develop our internal solutions; and we develop plans for events, recruitment, meetings and major initiatives."
                />

                {/* Integrity */}
                <Values
                    icon = {integration}
                    title = "Integrity"
                    principle = "In Principle: We provide advice that we believe is accurate. We say what we think is right, not what we think someone else wants to hear."
                    practice = "In Practice: We do not falsify data to support the recommendations we make; we provide advice to organisations even if we think they do not want to hear it; and we say our unfettered opinions when making decisions that affect the operation of 180 Degrees."
                />
            </div>

        </div>
        </>
    )
}

export default about
