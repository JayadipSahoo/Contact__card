import React from "react"
import git from "./github.png"
import telegram from "./telegram.png"
import insta from "./instagram-logo.png"
export default function footer(){
    return(
        <div className="footer">
        <img className="icons" src={git}  alt=""  onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/JayadipSahoo';
                                     } } ></img>
        <img className="icons" src={telegram} alt=""  onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://t.me/JayadipB521027';
                                     } } ></img>
        <img className="icons" src={insta} alt=""  onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://www.instagram.com/jds_infinite/';
                                     } } ></img>
           
        </div>
    )

}