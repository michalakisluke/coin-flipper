import React from "react";
import Decision from "../Decision";
import styled from "styled-components";
import { CastoroNormalVulcan16px } from "../../styledMixins";


function ShadowCardDisplay(props) {
  const { decisionProps } = props;

  return (
    <DisplayCard className="animate-enter6" id="display-card">
      <CardTitle>You should...</CardTitle>
      <Decision option1={decisionProps.option1} option2={decisionProps.option2} />
    </DisplayCard>
  );
}

const DisplayCard = styled.div`
  width: 360px;
  height: 243px;
  position: relative;
  margin-top: 58px;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 20px 50px #12112714;
  opacity: 0;
  transform: translate(0, 25px);

  &.animate-enter6 {
    animation: animate-enter6-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
  }
`;

const CardTitle = styled.div`
  ${CastoroNormalVulcan16px}
  margin-left: 24px;
  width: 312px;
  height: 22px;
  margin-top: 56px;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

export default ShadowCardDisplay;
