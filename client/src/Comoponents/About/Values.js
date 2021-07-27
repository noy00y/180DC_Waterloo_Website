import React from 'react'
import "./Values.css"

const Values = (props) => {
    return (
        <div className = "values">
            <div className = "values_title">
                <img src = {props.icon} className = "values_icon" />
                <h1>{props.title}</h1>
            </div>

            <div className = "values_description">
                <p className = "principle">{props.principle}</p>
                <p className = "practice">{props.practice}</p>
            </div>

        </div>
    )
}

export default Values