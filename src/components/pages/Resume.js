import React from "react";
import resumeDoc from '../../assets/Resume.pdf'

export default function Resume(){




    return(
        <div>
            <h3>Check Out My Resume Here:</h3>
            <br></br>
            <a href="" target="_blank">Visit</a>
            <br></br>
            <br></br>
            <a href={resumeDoc} download='Resume.pdf'><button>Download</button></a>
        </div>
    )
}