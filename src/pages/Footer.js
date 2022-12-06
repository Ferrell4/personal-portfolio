import React from "react";
import Git from '../Assets/Images/Socials/GitHub.png'
import Linked from '../Assets/Images/Socials/linkedin.png'
import Stack from '../Assets/Images/Socials/stackoverflow.png'






export default function Footer(){





return(
<footer>
    <div>
        <a href="https://github.com/ferrell4" target="_blank">
            <img src={Git} width='100px' height='100px'></img>
        </a>
    </div>
    <br></br>
    <div>
    <a href="https://www.linkedin.com/in/ferrellc/" target="_blank">
            <img src={Linked} width='' height='100px'></img>
        </a>
    </div>
    <br></br>
    <div>
    <a href="" target="_blank">
            <img src={Stack} width='400px' height='100px'></img>
        </a>
    </div>
</footer>

)

}