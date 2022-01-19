import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { CastoroNormalVulcan16px, ValignTextMiddle } from "../styledMixins";
import "./ShadowCardMenu.css";

function ShadowCardMenu() {
  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled-1 .mdc-button"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled-2 .mdc-button"));
  }, []);

  return (
    <MenuCard className="animate-enter1">
      <StartNav>
        <Title>Where should we start?</Title>
        <a href="#about1-card">
          <div className="button-raised-filled">
            <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
              <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Learn More</span>
            </button>
          </div>
        </a>
        <div className="button-raised-filled-1">
          <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
            <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Create an account</span>
          </button>
        </div>
        <div className="button-raised-filled-2">
          <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
            <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Log in</span>
          </button>
        </div>
      </StartNav>
    </MenuCard>
  );
}

const MenuCard = styled.div`
  width: 360px;
  height: 226px;
  margin-top: 56px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 20px 50px #12112714;
  opacity: 0;
  transform: translate(0, 25px);

  &.animate-enter1 {
    animation: animate-enter1-frames 0.5s ease-in-out 1.5s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
  }
`;

const StartNav = styled.div`
  margin-top: 24px;
  width: 312px;
  height: 178px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  ${ValignTextMiddle}
  ${CastoroNormalVulcan16px}
            margin-left: 10px;
  width: 292px;
  height: 20px;
  margin-top: 10px;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

export default ShadowCardMenu;
