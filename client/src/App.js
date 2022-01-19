import React, { Component } from "react";
import './App.css';
import ShadowCardTitle from './components/ShadowCardTitle'
import ShadowCardMenu from "../ShadowCardMenu";
import ShadowCardAbout from "../ShadowCardAbout";
import ShadowCardAboutCTA from "../ShadowCardAboutCTA";
import ShadowCardDecision from "../ShadowCardDecision";
import ShadowCardDisplay from "../ShadowCardDisplay";
import ShadowCardReview from "../ShadowCardReview";
import ShadowCardAccount from "../ShadowCardAccount"

function App(props) {
  const {
    shadowCardTitleProps,
    icontrueLinktrueLightDarkfalseProps,
    shadowCardAbout2Props,
    shadowCardAboutCTAProps,
    shadowCardDisplayProps,
    shadowCardReviewProps,
    shadowCardAccount3Props,
    footbarMobileProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <NavbarMobile />
        <ShadowCardTitle header={shadowCardTitleProps.header} textBody={shadowCardTitleProps.textBody} />
        <ShadowCardMenu />
        <IcontrueLinktrueLightDarkfalse
          howLongDoPayoutsTake={icontrueLinktrueLightDarkfalseProps.howLongDoPayoutsTake}
          onceYoureSetUp={icontrueLinktrueLightDarkfalseProps.onceYoureSetUp}
        />
        <ShadowCardAbout2
          iconQuestion={shadowCardAbout2Props.iconQuestion}
          text1={shadowCardAbout2Props.text1}
          text2={shadowCardAbout2Props.text2}
        />
        <ShadowCardAboutCTA
          iconQuestion={shadowCardAboutCTAProps.iconQuestion}
          title={shadowCardAboutCTAProps.title}
          textBody={shadowCardAboutCTAProps.textBody}
        />
        <ShadowCardDecision />
        <ShadowCardDisplay decisionProps={shadowCardDisplayProps.decisionProps} />
        <ShadowCardReview decisionProps={shadowCardReviewProps.decisionProps} />
        <ShadowCardAccount3 title={shadowCardAccount3Props.title} />
        <FootbarMobile src={footbarMobileProps.src} />
      </div>
    </div>
  );
}

export default Home;
