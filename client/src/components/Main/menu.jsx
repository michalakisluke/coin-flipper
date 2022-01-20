import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { CastoroNormalVulcan16px, ValignTextMiddle } from "../../styledMixins";
import "./style.css";

function Menu () {
  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled-1 .mdc-button"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled-2 .mdc-button"));
  }, []);

  return (
    <div className="animate-enter1">
      <div>
        <h3>Where should we start?</h3>
        <a href="#about">
          <div className="button-raised-filled">
            <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
              <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Learn More</span>
            </button>
          </div>
        </a>
        <a href="#register">
        <div className="button-raised-filled-1">
          <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
            <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Create an account</span>
          </button>
        </div>
        </a>
        <a href="#login">
        <div className="button-raised-filled-2">
          <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
            <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Log in</span>
          </button>
        </div></a>
      </div>
    </div>
  );
}

export default Menu;