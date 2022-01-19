import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { CastoroNormalVulcan16px } from "../styledMixins";
import "./ShadowCardDecision.css";

function ShadowCardDecision() {
  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di-1 .mdc-text-field"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
  }, []);

  return (
    <DecisionCard className="animate-enter5" id="decision-card">
      <Title>What’s the big (or small) decision?</Title>
      <LoginAccount>
        <div className="text-field-filled-di">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Play it safe
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <div className="text-field-filled-di-1">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Take a chance
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <a href="#display-card">
          <div className="button-raised-filled">
            <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
              <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Let us choose</span>
            </button>
          </div>
        </a>
      </LoginAccount>
    </DecisionCard>
  );
}

const DecisionCard = styled.div`
  width: 362px;
  height: 327px;
  margin-top: 47px;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 20px 50px #12112714;
  opacity: 0;
  transform: translate(0, 25px);

  &.animate-enter5 {
    animation: animate-enter5-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
  }
`;

const Title = styled.p`
  ${CastoroNormalVulcan16px}
  margin-left: 24px;
  width: 314px;
  height: 22px;
  margin-top: 56px;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

const LoginAccount = styled.div`
  margin-left: 24px;
  width: 314px;
  height: 173px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export default ShadowCardDecision;
