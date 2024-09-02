import React from "react";
import Img from "../img/temi-michael.jpg"
import { ReactTyped } from "react-typed";

export default function Intro() {


    return (
        <div className="introframe">
            <div className="introcenter">
                <div className="profileimgframe">
                    <img src={Img} alt="profile-img" className="profileimg" />
                </div>
                <div className="typename">
                    <p className="introname">
                        {" "}
                        <ReactTyped
                            strings={["My name is Temi Michael"]}
                            typeSpeed={100}
                            loop
                            loopCount={2}
                            backSpeed={100}
                            cursorChar=""
                            showCursor={true}
                        />
                    </p>
                </div>
                <div className="typeprofession">
                    <h1 className="profession">
                        {" "}
                        <ReactTyped
                            strings={["I am a Data Analyst", "I am a Frontend Developer"]}
                            typeSpeed={100}
                            loop
                            loopCount={3}
                            backSpeed={100}
                            cursorChar=""
                            showCursor={true}
                            startDelay={3000}
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
};