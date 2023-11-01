import React from "react"
import images from "../images/riteshImage.jpg"

export default function Section1(){
    return(
        <div>
            <img src={images} className="img" />
            <div className="img-content">
                <h1 className="name">Ritesh Yadav</h1>
                <h2 className="description1">Frontend Developer</h2>
                <p className="description2">riteshyadav.website</p>
                <div className="emailin">
                    <a  href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="blank">
                        <div className="emaildiv">
                            <i className='bx bxs-envelope'></i>
                            <p className="email">Email</p>
                        </div>
                    </a>
                    

                    <a href="https://www.linkedin.com/in/ritesh-yadav-2a5a03289/" target="blank">
                        <div className="lindiv">
                            <i class='bx bxl-linkedin-square'></i>
                            <p className="lin">LinkedIn</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}