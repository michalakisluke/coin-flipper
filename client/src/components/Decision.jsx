import React from "react";
import styled from "styled-components";
import { LatoLightVulcan16px, LatoBoldVulcan16px } from "../../styledMixins";


function Decision(props) {
  const { option1, option2, className } = props;

  return (
    <Decision1 className={`decision ${className || ""}`}>
      <DisplayOption1 className="display-option1">{option1}</DisplayOption1>
      <DisplayOption2 className="display-option2">{option2}</DisplayOption2>
    </Decision1>
  );
}

const Decision1 = styled.div`
  margin-left: 24px;
  width: 289px;
  height: 116px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  &.decision.display-decision {
    position: absolute;
    top: 25px;
    left: 31px;
    margin-left: unset;
    margin-top: unset;
  }
`;

const DisplayOption1 = styled.div`
  ${LatoBoldVulcan16px}
  width: 312px;
  height: 53px;
  letter-spacing: 0;
  line-height: 28.8px;
`;

const DisplayOption2 = styled.div`
  ${LatoLightVulcan16px}
  width: 312px;
  height: 63px;
  letter-spacing: 0;
  line-height: 28.8px;
  text-decoration: line-through;
`;

export default Decision;
