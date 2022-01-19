import React, { useEffect } from "react";
import Decision from "../Decision";
import * as mdc from "material-components-web";
import styled from "styled-components";
import "./ShadowCardReview.css";

function ShadowCardReview(props) {
  const { decisionProps } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
  }, []);

  return (
    <ReviewCard className="animate-enter7">
      <Decision option1={decisionProps.option1} option2={decisionProps.option2} className={decisionProps.className} />
      <RateReview>
        <Object src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/object@2x.png" />
        <AddRating src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/add-rating@2x.png" />
      </RateReview>
      <div className="button-raised-filled">
        <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
          <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Save review</span>
        </button>
      </div>
    </ReviewCard>
  );
}

const ReviewCard = styled.div`
  width: 360px;
  height: 322px;
  position: relative;
  margin-top: 45px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 20px 50px #12112714;
  opacity: 0;
  transform: translate(0, 25px);

  &.animate-enter7 {
    animation: animate-enter7-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
  }
`;

const RateReview = styled.div`
  position: absolute;
  width: 289px;
  height: 98px;
  top: 149px;
  left: 31px;
  display: flex;
  flex-direction: column;
`;

const Object = styled.img`
  width: 289px;
  height: 76px;
  margin-top: -21px;
`;

const AddRating = styled.img`
  width: 288px;
  height: 34px;
  margin-top: 8px;
`;

export default ShadowCardReview;
