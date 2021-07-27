import React from 'react'
import "./CaseStudy.css"
import {useParams} from 'react-router-dom'
import cases from '../cases'

function CaseStudy() {

    let { id } = useParams();


    return (
        <div className="caseStudy">
            <h3 className="caseStudy_header"><span className="about_label">CASE STUDY :  </span>{cases[id].title}</h3>
            <div className="about_client">
                <div className="client_logo">
                    <img src={cases[id].image} alt="brand logo"></img>
                </div>
                <div className="client_info">
                    {cases[id].about.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
            <h3 className="caseStudy_header project_header">ABOUT THE PROJECT</h3>
            <div className="project_info">
                {cases[id].project.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default CaseStudy
