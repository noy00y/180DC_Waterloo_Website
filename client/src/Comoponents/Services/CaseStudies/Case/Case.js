import React from 'react'
import "./Case.css"
import {Link} from 'react-router-dom'

function Case({caseInfo, index}) {
    return (
        <div className="case">
            <Link to={`/case_study/${index}`}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={caseInfo.image} alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h3 className="case_header">
                                {caseInfo.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Case
