import React from "react";
import styled from "styled-components";
import LatoLightGravel14px from "../styledMixins";
import CastoroNormalVulcan16px from "../styledMixins";

function ShadowCardAbout(props) {
    const {
        iconQuestion,
        text1,
        text2
    }
    =props;
    return ( <AboutCard className="animate-enter2"> <IconQuestion src= {
        iconQuestion
    }
    /> <AboutContainer> <TextTitle> {
        text1
    }
    </TextTitle> <TextBody> {
        text2
    }
    </TextBody> </AboutContainer> </AboutCard>);
}

const AboutCard=styled.div` 
width: 360px;
height: 199px;
margin-top: 30px;
background-color: var(--white);
border-radius: 12px;
box-shadow: 0px 20px 50px #12112714;
opacity: 0;
transform: translate(0, 25px);
&.animate-enter2 {
    animation: animate-enter2-frames 0.5s ease-in-out 1s 1 normal forwards;
    opacity: 0;
    transform: translate(0, 25px);
}
`;
const IconQuestion=styled.img` margin-top: 32px;
width: 28px;
height: 28px;
margin-left: 24px;
`;
const AboutContainer=styled.div` margin-top: 32px;
width: 264px;
height: 134px;
margin-left: 20px;
display: flex;
flex-direction: column;
`;
const TextTitle=styled.div` $ {
    CastoroNormalGravel16px
}

height: 22px;
letter-spacing: 0;
line-height: 22.4px;
white-space: nowrap;
`;
const TextBody=styled.p` $ {
    LatoLightGravel14px
}

height: 100px;
margin-top: 12px;
letter-spacing: 0;
line-height: 25.2px;
`;
export default ShadowCardAbout;