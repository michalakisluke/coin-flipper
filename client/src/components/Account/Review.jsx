import React, { useEffect } from "react";
import Decision from "../Decision";
import * as mdc from "material-components-web";
import styled from "styled-components";
import "./Account.css";

function Review(props) {
  const { decisionProps } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
  }, []);

  return (
    <div className="animate-enter7">
      <Decision option1={decisionProps.option1} option2={decisionProps.option2} className={decisionProps.className} />
      <Rating>
        <Object src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/object@2x.png" />
        <AddRating src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/add-rating@2x.png" />
      </Rating>
      <div className="button-raised-filled">
        <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
          <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Save review</span>
        </button>
      </div>
    </div>
  );
}

export default Review;
