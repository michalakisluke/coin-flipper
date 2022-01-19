import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { LatoLightGravel14px2, CastoroNormalVulcan16px } from "../styledMixins";
import "./ShadowCardAboutCTA.css";

function ShadowCardAboutCTA(props) {
  const { iconQuestion, title, textBody } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".fab-regular-primary .mdc-fab"));
    document.querySelector(".fab-regular-primary").parentElement.style.width = "auto";
  }, []);

  return (
    <AboutCTACard className="animate-enter4">
      <IconQuestion src={iconQuestion} />
      <AboutContainer>
        <Title>{title}</Title>
        <TextBody>{textBody}</TextBody>
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
      </AboutContainer>
    </AboutCTACard>
  );
}

const AboutCTACard = styled.div`
  width: 360px;
  height: 466px;
  margin-top: 30px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 20px 50px #12112714;
  opacity: 0;
  transform: translate(0, 25px);
  cursor: pointer;

  &.animate-enter4 {
    animation: animate-enter4-frames 0.5s ease-in-out 1.5s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
  }
`;

const IconQuestion = styled.img`
  margin-top: 32px;
  width: 28px;
  height: 28px;
  margin-left: 24px;
`;

const AboutContainer = styled.div`
  margin-top: 32px;
  width: 264px;
  height: 402px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  ${CastoroNormalVulcan16px}
  height: 22px;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

const TextBody = styled.p`
  ${LatoLightGravel14px2}
  height: 300px;
  margin-top: 12px;
  letter-spacing: 0;
  line-height: 25.2px;
`;

export default ShadowCardAboutCTA;
