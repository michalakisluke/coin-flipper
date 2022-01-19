import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { LatoLightGravel14px2, CastoroNormalVulcan16px } from "../../styledMixins";
import "./ShadowCardAboutCTA.css";

function AboutCTA() {
  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".fab-regular-primary .mdc-fab"));
    document.querySelector(".fab-regular-primary").parentElement.style.width = "auto";
  }, []);

  return (
    <div className="animate-enter4">
      <img src={iconQuestion} />
      <div>
        <h3>So what can you do?</h3>
        <p>This is where Determined comes in. 
          <br></br>
          Determined is a decision making application designed to address the myriad of choices that we all encounter daily. Release yourself from the crippling burden of choosing what to wear. Let us decide if you should pivot your business or go back to sleep for 30 more minutes. Make choosing a thing of the past and leave the tough choices to us. Right or wrong, nothing really matters.
        </p>
        <div className="widget-wrapper">
          <a href="#decision-card">
            <div className="fab-regular-primary">
              <button className="mdc-fab   mdc-theme--primary-bg mdc-theme--on-primary  " data-id="anima-widget">
                <div className="mdc-fab__ripple"></div>
                <span className="material-icons mdc-fab__icon">keyboard_arrow_right</span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutCTA;
