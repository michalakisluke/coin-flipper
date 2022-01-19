import React, { Component } from "react";
import './App.css';
import { Login, Register } from "./components/Login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;

// import ShadowCardTitle from './components/ShadowCardTitle'
// import ShadowCardMenu from "../ShadowCardMenu";
// import ShadowCardAbout from "../ShadowCardAbout";
// import ShadowCardAboutCTA from "../ShadowCardAboutCTA";
// import ShadowCardDecision from "../ShadowCardDecision";
// import ShadowCardDisplay from "../ShadowCardDisplay";
// import ShadowCardReview from "../ShadowCardReview";
// import ShadowCardAccount from "../ShadowCardAccount"

// function App(props) {
//     const {
//         shadowCardTitleProps,
//         icontrueLinktrueLightDarkfalseProps,
//         shadowCardAbout2Props,
//         shadowCardAboutCTAProps,
//         shadowCardDisplayProps,
//         shadowCardReviewProps,
//         shadowCardAccount3Props,
//         footbarMobileProps,
//     } = props;

//     return ( <
//         div className = "container-center-horizontal" >
//         <
//         div className = "home screen" >
//         <
//         NavbarMobile / >
//         <
//         ShadowCardTitle header = { shadowCardTitleProps.header }
//         textBody = { shadowCardTitleProps.textBody }
//         /> <
//         ShadowCardMenu / >
//         <
//         IcontrueLinktrueLightDarkfalse howLongDoPayoutsTake = { icontrueLinktrueLightDarkfalseProps.howLongDoPayoutsTake }
//         onceYoureSetUp = { icontrueLinktrueLightDarkfalseProps.onceYoureSetUp }
//         /> <
//         ShadowCardAbout2 iconQuestion = { shadowCardAbout2Props.iconQuestion }
//         text1 = { shadowCardAbout2Props.text1 }
//         text2 = { shadowCardAbout2Props.text2 }
//         /> <
//         ShadowCardAboutCTA iconQuestion = { shadowCardAboutCTAProps.iconQuestion }
//         title = { shadowCardAboutCTAProps.title }
//         textBody = { shadowCardAboutCTAProps.textBody }
//         /> <
//         ShadowCardDecision / >
//         <
//         ShadowCardDisplay decisionProps = { shadowCardDisplayProps.decisionProps }
//         /> <
//         ShadowCardReview decisionProps = { shadowCardReviewProps.decisionProps }
//         /> <
//         ShadowCardAccount3 title = { shadowCardAccount3Props.title }
//         /> <
//         FootbarMobile src = { footbarMobileProps.src }
//         /> < /
//         div > <
//         /div>
//     );
// }

// export default Home;