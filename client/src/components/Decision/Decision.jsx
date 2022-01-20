import React from "react";
import styled from "styled-components";
import { LatoLightVulcan16px, LatoBoldVulcan16px } from "../../styledMixins";


function Decision(props) {
  const { option1, option2, className } = props;

  return (
    <Decision1 className={`decision ${className || ""}`}>
      <DisplayOption1 className="decisionwinner">{option1}</DisplayOption1>
      <DisplayOption2 className="decisionloser">{option2}</DisplayOption2>
    </Decision1>
  );
}

export default Decision;