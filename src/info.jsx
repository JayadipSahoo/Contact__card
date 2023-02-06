import React from "react"
import image from "./IMG_1497.png"
import email from "./email.png"
import linked from "./linkedin.png"
export default function Info(){
    return <div>
        <img src={image} alt="ME" className="IMG"></img>
        <p className="Jayadip">Jayadip Sahoo</p>
        <p className="Web">Web Developer</p>
        <div className="buttons">
           <button className="Email" 
                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='mailto:jayadip360@gmail.com';
                                    }      
                             }>
            <img className="icon" src={email} alt="" />   Email </button>

          <button className="LinkedIN"   onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://www.linkedin.com/in/jayadip-sahoo-166165228';
                                     }}>
                   
                LinkedIn <img className="icon" src={linked} alt=""     
                         /></button>
        </div>

    </div>

}