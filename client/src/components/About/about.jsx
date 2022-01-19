import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import LatoLightGravel14px from "../../styledMixins";
import CastoroNormalVulcan16px from "../../styledMixins";

function About() {
        return ( 
        <div>
            <div className="animate-enter2"> 
                <img src= {iconQuestion}></img>
                <h3 className="header">How many decisions do you make each day?</h3>
                <p>The answer is probably more than you think! It is estimated that the average adult makes more than 35,00 decisions per day. </p> 
            </div>
            <div className="animate-enter2"> 
                <img src= {iconQuestion}></img>
                <h3 className="header">Sound familiar? </h3>
                <p>This is known as decision fatigue. This mental overload is not only exhaustive, but it can impede your ability to continue making decisions.</p> 
            </div>
        </div> 
    )};

export default About;