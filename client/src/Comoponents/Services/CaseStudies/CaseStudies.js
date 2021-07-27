import React, {useState} from 'react'
import './CaseStudies.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Case from './Case/Case';
import cases from './cases'

function CaseStudies() {

    return (
        <div className="caseStudies">
            {cases.map((item, i) => (
                <Case caseInfo={item} index={i}/>
            ))}
        </div>
    )
}

export default CaseStudies
