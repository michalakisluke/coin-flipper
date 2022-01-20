import React from "react";
import Decision from "./Decision";
import styled from "styled-components";
import { CastoroNormalVulcan16px } from "../../styledMixins";


function Display(props) {
  const { decisionProps } = props;

  return (
    <div className="animate-enter6" id="display-card">
      <div>You should...</div>
      <Decision option1={decisionProps.option1} option2={decisionProps.option2} />
    </div>
  );
}

export default Display;
