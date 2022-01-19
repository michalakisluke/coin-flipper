import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { CastoroNormalVulcan16px } from "../styledMixins";

function ShadowCardAccount(props) {
  const { title } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
  }, []);

  return (
    <AccountCard className="animate-enter8">
      <Title>{title}</Title>
      <CreateAccount>
        <Object src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/object-6@2x.png" />
        <Object1 src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/object-7@2x.png" />
        <Object1 src="https://anima-uploads.s3.amazonaws.com/projects/61e0b89d3ace7e614479269b/releases/61e685c2965d00485aa0e162/img/object-8@2x.png" />
        <div className="button-raised-filled">
          <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
            <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Sign up</span>
          </button>
        </div>
      </CreateAccount>
    </AccountCard>
  );
}

const AccountCard = styled.div`
  width: 360px;
  height: 326px;
  margin-top: 361px;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 20px 50px #12112714;
  opacity: 0;
  transform: translate(0, 25px);

  &.animate-enter8 {
    animation: animate-enter8-frames 0.5s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
  }
`;

const Title = styled.p`
  ${CastoroNormalVulcan16px}
  margin-left: 24px;
  width: 312px;
  height: 22px;
  margin-top: 56px;
  letter-spacing: 0;
  line-height: 22.4px;
  white-space: nowrap;
`;

const CreateAccount = styled.div`
  margin-left: 24px;
  width: 312px;
  height: 198px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Object = styled.img`
  width: 312px;
  height: 44px;
`;

const Object1 = styled.img`
  width: 312px;
  height: 44px;
  margin-top: 10px;
`;

export default ShadowCardAccount;
